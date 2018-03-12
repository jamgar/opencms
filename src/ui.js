import inscrybmde from 'inscrybmde'
import { http } from './http'
import { home, about, post, posts, postForm, contact } from './views'

class UI {
  constructor() {
    this.view = document.querySelector('#view')
    this.formState = 'New'
    this.API_URL = 'http://localhost:3000'
    this.URL = 'http://localhost:8080'
    this.postmde = ''
  }

  extractParams = (hash) => {
    const params = {}
    const paramsArray = hash.split('/')
    if (paramsArray.length > 1) {
      params["id"] = paramsArray[paramsArray.length - 1]
    }
    return params
  }

  showView = () => {
    const route = location.hash || '/'
    const params = this.extractParams(location.hash)

    switch(route) {
      case "#about":
        this.view.innerHTML = about()
        break;
      case "#posts":
        http.get(`${this.API_URL}/posts`)
              .then(data => posts(data))
              .then(html => this.view.innerHTML = html)
              .catch(err => console.log(err))
        break;
      case "#posts/new":
          this.formState = 'New'
          this.view.innerHTML = postForm(this.formState, {id:'', title:'', body:''})
          this.postmde = new inscrybmde({ element: document.getElementById('post-body')})
          document.querySelector('#post-submit').addEventListener('click', this.submitPost)
        break;
      case `#posts/edit/${params.id}`:
        this.formState = 'Edit'
        http.get(`${this.API_URL}/posts/${params.id}`)
            .then(data => postForm(this.formState, data))
            .then(html => {
              this.view.innerHTML = html
              this.postmde = new inscrybmde({ element: document.getElementById('post-body')})
              document.querySelector('#post-submit').addEventListener('click', this.submitPost)
            })
            .catch(err => console.log(err))

        break;
      case `#posts/delete/${params.id}`:
        if (confirm('Are you sure?')) {
          http.delete(`${this.API_URL}/posts/${params.id}`)
          .then(data => post(data))
          .then(html => {
            window.location.href = `${this.URL}/#posts`
            ui.showAlert('Post removed', 'alert alert-success')
          })
          .catch(err => console.log(err))
        } else {
          window.location.href = `${this.URL}/#posts/${params.id}`
        }

        break;
      case `#posts/${params.id}`:
        http.get(`${this.API_URL}/posts/${params.id}`)
            .then(data => post(data))
            .then(html => this.view.innerHTML = html)
            .catch(err => console.log(err))
        break;
      case "#contact":
        this.view.innerHTML = contact()
        break;
      default:
        this.view.innerHTML = home()
    }
  }

  submitPost = (e) => {
    const title = document.querySelector('#post-title').value
    const body = this.postmde.value()
    const id = document.querySelector('#post-id').value

    const data = {
      title,
      body,
    }

    if (title === '' || body === '') {
      this.showAlert('Please fill in all fields', 'alert alert-danger')
    } else {
      if (this.formState === 'New') {
        http.post(`${this.API_URL}/posts`, data)
            .then(response => {
              window.location.href = `${this.URL}/#posts/${response.id}`
            })
            .catch(err => console.log(err))
      } else {
        http.put(`${this.API_URL}/posts/${id}`, data)
        .then(response => {
          window.location.href = `${this.URL}/#posts/${response.id}`
        })
        .catch(err => console.log(err))

      }
    }

    e.preventDefault()
  }

  showAlert = (message, className) => {
    this.clearAlert()

    const div = document.createElement('div')
    div.className = className
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('#main-container')
    const view = document.querySelector('#view')
    container.insertBefore(div, view)

    // Clear alert
    setTimeout(() => {
      this.clearAlert()
    }, 3000)

  }

  clearAlert = () => {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }
}

export const ui = new UI()
