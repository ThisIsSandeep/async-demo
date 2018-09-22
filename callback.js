console.log('Before');
getUser(1, user => {
  console.log('User :', user);
  getRepo(user.userName, function(repos) {
    console.log(repos);
    getCommits(repos[0], function(commits) {
      console.log(commits);
      // Callback hell see the solution of it
    });
  });
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Getting user from a database');
    callback({ id: id, userName: 'Sandeep Bansal' });
  }, 2000);
}

function getRepo(userName, callback) {
  setTimeout(() => {
    console.log('Getting user repo..... of', userName);
    callback(['repo1', 'repo2', 'repo3', 'repo4']);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Getting commits of..', repo);
    callback(['initial commit', 'project resturctured', 'final commit']);
  }, 2000);
}
