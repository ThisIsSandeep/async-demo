console.log('Before');
getUser(1)
  .then(user => getRepo(user.userName))
  .then(repo => getCommits(repo[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log('Error: ', err.message));

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting user from a database');
      resolve({ id: id, userName: 'Sandeep Bansal' });
    }, 2000);
  });
}

function getRepo(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting user repo..... of', userName);
      resolve(['repo1', 'repo2', 'repo3', 'repo4']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting commits of..', repo);
      resolve(['initial commit', 'project resturctured', 'final commit']);
    }, 2000);
  });
}
