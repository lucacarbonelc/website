# blogdown::new_site(theme = "gcushen/hugo-academic", force = TRUE)
# options(blogdown.server.timeout = 600)
# options(blogdown.hugo.dir = 'C:/Workdir/MyApps')
blogdown::serve_site()
servr::daemon_stop()
# blogdown::install_hugo()
# blogdown::hugo_version()