console.log('Before');
// Promise based approach
getUser(1)
  .then(user => getRepo(user.userName))
  .then(repo => getCommits(repo[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log('Error: ', err.message));

// Async and await approach
async function displayCommit() {
  try {
    const user = await getUser(1);
    const repos = await getRepo(user.userName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err.message);
  }
}

displayCommit();

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
      // reject(new Error('Could not get the repo'));
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
