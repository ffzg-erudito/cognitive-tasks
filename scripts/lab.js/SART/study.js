// Define the sequence of components that define the study


const sartSizes = ['48','72','94','100','120']

const sartTrials = [
  { number: '1', response: 'Space' },
  { number: '2', response: 'Space' },
  { number: '3', response: 'Space' },
  { number: '4', response: 'Space' },
  { number: '5', response: 'Space' },
  { number: '6', response: 'Space' },
  { number: '7', response: 'Space' },
  { number: '8', response: 'Space' },
  { number: '9', response: 'Space' }
]

const template = new lab.flow.Sequence({
  content: [
    new lab.html.Screen({
      content: '<div style = "font-size: ${ sartSizes[Math.floor(Math.random() * sartSizes.length)] }px ; font-family:Times New Roman"> ${ parameters.number } </div>',
      timeout: 250,
      responses: {
        'keypress(Space)' : 'space' 
      }
    }),

    new lab.html.Screen({
      content: '<div style = "font-size: 170px; font-family:Helvetica"> ⊗ </div>',
      timeout: 900,
      // state.correct ? print('correct')
    })
  ]
  
})


const study = new lab.flow.Sequence({
  content: [
    new lab.html.Screen({
      content: 'instructions'/* insert instructions here */,
      responses: {'keypress(Space)' : 'Go'}
    }),

    new lab.flow.Loop({ 
      template: template,
      templateParameters: sartTrials,
      sample: { n: 630, mode: 'draw' }
    })
  ]
})
    

// Start the study (uncomment to run)
study.run()
