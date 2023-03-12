I put in app.js:
app.get('/health', (req, res) => {
  res.send('no ok')
})
git commit/push
action deploy gives error.
looking 'heroku releases', v8 is last, 'heroku rollback' again release v7.
<https://ivospokedex.herokuapp.com/health> instead 'no ok' is 'ok' again
heroku rollback
Rolling back ⬢ ivospokedex to v7... done, v9
 !    Rollback affects code and config vars; it doesn't add or remove addons.
 !    To undo, run: heroku rollback v8
Heroku logs:
2023-03-12T06:38:54.754091+00:00 app[api]: Rollback to v7 by user <myemail>
2023-03-12T06:38:54.754091+00:00 app[api]: Release v9 created by user <myemail>
2023-03-12T06:38:56.574523+00:00 heroku[web.1]: Restarting
2023-03-12T06:38:56.587419+00:00 heroku[web.1]: State changed from up to starting
2023-03-12T06:38:57.218803+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2023-03-12T06:38:57.390225+00:00 heroku[web.1]: Process exited with status 143
2023-03-12T06:38:58.045613+00:00 heroku[web.1]: Starting process with command `node app.js`
2023-03-12T06:38:59.394225+00:00 app[web.1]: server started on port 5000
2023-03-12T06:38:59.797076+00:00 heroku[web.1]: State changed from starting to up
2023-03-12T06:39:07.666394+00:00 heroku[router]: at=info method=GET path="/health" host=ivospokedex.herokuapp.com request_id=152b5ba9-0940-43ab-ad9f-5fe7e72c14b4 fwd="46.131.26.241" dyno=web.1 connect=0ms service=8ms status=200 bytes=200 protocol=https
