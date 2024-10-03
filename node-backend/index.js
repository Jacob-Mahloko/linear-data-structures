// const express = require('express');
// const cors = require('cors');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');

// const app = express();

// // Middleware to parse JSON and enable CORS
// app.use(cors());

// app.use(express.json());

// // POST route for running the code
// app.post('/run-code', (req, res) => {
//   const { code } = req.body;

//   if (!code) {
//     return res.status(400).json({ error: 'No code provided' });
//   }

//   // Save the user-submitted code to linkedlist.cpp
//   const linkedListFilePath = path.join(__dirname, 'linkedlist.cpp');
//   fs.writeFileSync(linkedListFilePath, code, (err) => {
//     if (err) {
//       console.error('Error writing file:', err);
//       return res.status(500).json({ error: 'Failed to write code to file' });
//     }
//   });

//   // Step 1: Compile the code using makefile
//   const makeCommand = `make -f makefile`;

//   exec(makeCommand, (error, stdout, stderr) => {
//     if (error) {
//       console.error('Error executing makefile:', error);
//       return res.status(500).json({ error: 'Error executing makefile', details: stderr });
//     }


//     // Step 2: If the compilation succeeds, run the compiled binary to get test results
//     const runCommand = `./test_output`;  // Assuming the makefile generates test_output

//     exec(runCommand, (runError, runStdout, runStderr) => {
//       if (runError) {
//         console.error('Error running tests:', runError, runStderr);
//         return res.status(123).json({ error: 'Error running tests', details: runStderr });
//       }
//       console.log('No error found');
//       // Step 3: Send the test output to the frontend
//       res.json({ output: runStdout });
//     });
//   });
// });

// // Start the server on port 3001
// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });

const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// POST route for running the code
app.post('/run-code', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  // Save the user-submitted code to linkedlist.cpp
  const linkedListFilePath = path.join(__dirname, 'linkedlist.cpp');
  fs.writeFileSync(linkedListFilePath, code, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).json({ error: 'Failed to write code to file' });
    }
  });
  // ----------------------------------------------------------------------
  const compileCommand = `g++ -o test_output linkedlist.cpp tests.cpp`;

exec(compileCommand, (error, stdout, stderr) => {
  if (error) {
    console.error('Error compiling code:', stderr);
    return res.status(500).json({ error: 'Compilation error', details: stderr });
  }
  const listFilesCommand = `ls -l`;
exec(listFilesCommand, (err, stdout, stderr) => {
  console.log("Files in the current directory:", stdout);
});


  const runCommand = "./test_output"; // Run the compiled binary

  exec(runCommand,{ maxBuffer: 1024 * 500 },(runError, runStdout, runStderr) => {
    if (runStderr) {
      console.error('Error running tests:j', runError);
      return res.status(500).json({ error: 'Execution error', details: runError });
    }

    res.json({ output: runStdout || runStderr });
  });
});

// ------------------------------------------------------------------------------
  // // Compile and run the tests using make
  // const makeCommand = `make -f makefile`;

  // exec(makeCommand, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error('Error executing makefile:', error);
  //     console.log('stdout:', stdout); // Log stdout to see more information
  //     console.log('stderr:', stderr); // Log stderr to see the detailed error
    
  //     return res.status(69).json({ error: 'Error executing tests', details: stderr });
  //   }

  //    // Step 2: If the compilation succeeds, run the compiled binary to get test results
  //   const runCommand = `./test_output`;  // Assuming the makefile generates test_output
  //   exec(runCommand, (runError, runStdout, runStderr) => {
  //           if (runError) {
  //             console.error('Error running tests:', runError, runStderr);
  //             return res.status(123).json({ error: 'Error running tests', details: runStderr });
  //           }
  //           console.log('No error found');
  //           // Step 3: Send the test output to the frontend
  //           res.json({ output: runStdout });
  //         });
  
  // //  res.json({ output: stdout });
  // });






});

// Start the server on port 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
