

const LyFnInputParams = {
  InputSample : ""
}

const LyFnOutputParams = {
  OutputSample: ""
}

function PreRun() {

}

function Run() {
    // Should replace this example by your own function
    let out = LyFnInputParams.InputSample + " " + process.env.ENV1
    LyFnOutputParams.OutputSample = out
    return LyFnOutputParams
}

function PostRun() {

}

module.exports = { Run, PreRun, PostRun, LyFnOutputParams, LyFnInputParams }
