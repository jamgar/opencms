import showdown from 'showdown'

export const home = () => {
  let output = `
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Welcome To OpenCMS</h1>
        <p>This is a SPA project without a JavaScript framework that I used for learning purposes. It has been a great learning experience. Please feel free to clone and use as you please.</p>
        <p><a class="btn btn-primary btn-lg" href="#about" role="button">Learn more &raquo;</a></p>
      </div>
    </div>
  `
  return output
}

export const about = () => {
  let output = `
    <div class="container mt-4">
      <h1 class="text-center">About Page</h1>
      <p>Lorem ipsum dolor amet gastropub yr gochujang, DIY jean shorts disrupt tofu health goth kickstarter roof party shoreditch. Tilde actually deep v, health goth snackwave pork belly vaporware etsy typewriter banh mi tumeric +1 pug enamel pin brunch. Disrupt chartreuse 3 wolf moon quinoa hexagon hell of vaporware small batch letterpress kombucha +1 yr messenger bag live-edge distillery. Pour-over ennui green juice glossier man bun, church-key keffiyeh cold-pressed chicharrones 8-bit aesthetic kitsch banh mi snackwave pinterest. Art party dreamcatcher artisan, taiyaki pour-over venmo ramps. Readymade kombucha williamsburg helvetica pop-up pug twee ethical bushwick. Keytar enamel pin actually, banjo polaroid ramps normcore small batch fingerstache synth you probably haven't heard of them cray.</p>
    </div>
  `
  return output
}

export const post = (post) => {
  const converter = new showdown.Converter()
  const newBody = converter.makeHtml(post.body)

  let output = `
    <div class="container mt-4">
      <p><small><em>image will go here</em></small></p>
      <h1 class="text-center">${post.title}</h1>
      <div class="pull-right">
        <a href="#posts/edit/${post.id}" title="Edit" class="edit card-link" data-id="${post.id}">
          <i class="fa fa-pencil"></i>
        </a>
        <a href="#posts/delete/${post.id}" title="delete" class="delete card-link" data-id="${post.id}">
          <i class="fa fa-remove"></i>
        </a>
      </div>
      <p><small><em>metedata will go here</em></small></p>
      <hr>
      <p>${newBody}</p>
    </div>
  `
  return output
}

export const posts = (posts) => {
  let output = ''
  output += `
    <div class="container mt-4">
    <a href="#posts/new" class="btn btn-primary mb-3">New Post</a>
  `
  if (Object.keys(posts).length != 0) {
    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <a href="#posts/${post.id}"><h4 class="card-title">${post.title}</h4></a>
        </div>
      </div>
      `
    })
  }
  output += '</div>'
  return output
}

export const postForm = (state, data) => {
  let output = `
    <div class="container mt-4">
      <h1>${state} Post</h1>
      <form id="post-form">
        <div class="form-group">
          <label for="post-title">Title</label>
          <input type="text" class="form-control" id="post-title" placeholder="Enter Title" value="${data.title}">
        </div>
        <div class="form-group">
          <label for="post-body">Post Body</label>
          <textarea class="form-control" id="post-body" rows="8">${data.body}</textarea>
        </div>
        <input type="hidden" id="post-id" value="${data.id}">
        <button id="post-submit" type="submit" class="btn btn-primary">Submit</button>
        <a href="#posts" id="post-cancel" class="btn btn-warning">Cancel</a
      </form>
    </div>
  `
  return output
}

export const contact = () => {
  let output = `
    <div class="container mt-4">
      <h1 class="text-center">Contact</h1>
      <div class="row">
        <div class="col-md-6 offset-md-3">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" placeholder="Enter Message..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
  `
  return output
}
