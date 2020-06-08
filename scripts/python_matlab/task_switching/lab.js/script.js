// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "izmjenjivanje-zadatka",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Izmjenjivanje zadatka",
    "description": "\n",
    "repository": "",
    "contributors": ""
  },
  "parameters": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003E Sad ćete rješavati zadatak izmjenjujućeg pravila.\u003C\u002Fp\u003E\r\n    \u003Cp\u003E Na sredini zaslona će se pojavljivati brojke od 1 do 9, osim broja 5, a Vaš će zadatak biti da donesete jednu od dvije moguće procjene.\u003C\u002Fp\u003E\r\n      \r\n    \u003Cp\u003ETrebat ćete ili procijeniti PARNOST prikazanog broja ili njegovu VELIČINU.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EAko je broj prikazan u BIJELOM kvadratu, trebate procijeniti je li on paran ili neparan.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EAko je broj prikazan u SIVOM kvadratu, trebate procijeniti je li on veći ili manji od 5.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EZa svaku procjenu imate 1.5 sekundi. Ako u tom vremenu ne odgovorite, računalo će zabilježiti pogrešan odgovor.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E za nastavak upute.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "OddEvenPractice + feedback",
      "skip": true,
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003ENajprije ćete vježbati procjenu parnosti broja.\r\n\r\n    \u003Cp\u003EAko je prikazani broj PARAN, pritisnite tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E na tipkovnici.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EAko je prikazani broj NEPARAN, pritisnite tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESada ćete proći kroz nekoliko pokušaja za uvježbavanje, pri čemu ćete dobivati povratnu informaciju o točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli zadatke za uvježbavanje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "0",
              "trial_cnt": "0",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch",
              "": "white"
            },
            {
              "block_cnt": "0",
              "trial_cnt": "1",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch",
              "": "white"
            },
            {
              "block_cnt": "0",
              "trial_cnt": "2",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch",
              "": "white"
            },
            {
              "block_cnt": "0",
              "trial_cnt": "3",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch",
              "": "white"
            },
            {
              "block_cnt": "0",
              "trial_cnt": "4",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch",
              "": "white"
            },
            {
              "block_cnt": "0",
              "trial_cnt": "5",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch",
              "": "white"
            },
            {
              "block_cnt": "0",
              "trial_cnt": "6",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch",
              "": "white"
            },
            {
              "block_cnt": "0",
              "trial_cnt": "7",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practicePureFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch",
              "": "white"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback === 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "OddEvenPractice",
      "skip": true,
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EU sljedećem nizu pokušaja za vježbu rješavat ćete isti zadatak, ali sada nećete dobivati povratnu informaciju o točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli zadatke za uvježbavanje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "1",
              "trial_cnt": "0",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "1",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "2",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "3",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "4",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "5",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "6",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "7",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "8",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "9",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "10",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "11",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "12",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "13",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "14",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "1",
              "trial_cnt": "15",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practicePureNoFeedOE",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "OddEvenTEST",
      "skip": true,
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EDošli ste do kraja zadataka za uvježbavanje.\u003C\u002Fp\u003E\r\n    \u003Cp\u003ESlijede testni zadaci, u kojima nećete dobivati povratnu informaciju o\r\n      točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli mjerenje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "2",
              "trial_cnt": "0",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "1",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "2",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "3",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "4",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "5",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "6",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "7",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "8",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "9",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "10",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "11",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "12",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "13",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "14",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "15",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "16",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "17",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "18",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "19",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "20",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "21",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "22",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "23",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "24",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "25",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "26",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "27",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "28",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "29",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "30",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "2",
              "trial_cnt": "31",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testPureOE",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "GreaterLesserPractice + Feedback",
      "skip": true,
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003ESada ćete uvježbavati procjenu VELIČINE broja.\u003C\u002Fp\u003E\r\n    \r\n    \u003Cp\u003EAko je prikazani broj VEĆI od 5, pritisnite tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E na tipkovnici.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EAko je prikazani broj MANJI od 5, pritisnite tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E na tipkovnici.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EPrvo ćete proći kroz nekoliko zadataka za uvježbavanje, pri čemu ćete dobivati povratnu informaciju o točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli zadatke za uvježbavanje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "3",
              "trial_cnt": "0",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "3",
              "trial_cnt": "1",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "3",
              "trial_cnt": "2",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "3",
              "trial_cnt": "3",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "3",
              "trial_cnt": "4",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "3",
              "trial_cnt": "5",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "3",
              "trial_cnt": "6",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "3",
              "trial_cnt": "7",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practicePureFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "GreaterLesserPractice",
      "skip": true,
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EU sljedećem nizu pokušaja za vježbu rješavat ćete isti zadatak, ali sada nećete dobivati povratnu informaciju o točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli zadatke za uvježbavanje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "4",
              "trial_cnt": "0",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "1",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "2",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "3",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "4",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "5",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "6",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "7",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "8",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "9",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "10",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "11",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "12",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "13",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "14",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "4",
              "trial_cnt": "15",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practicePureNoFeedHL",
              "blockType": "practice",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "GreaterLesserTEST",
      "skip": true,
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EDošli ste do kraja zadataka za uvježbavanje.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESlijede testni zadaci, u kojima nećete dobivati povratnu informaciju o točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli mjerenje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "5",
              "trial_cnt": "0",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "1",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "2",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "3",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "4",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "5",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "6",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "7",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "8",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "9",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "10",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "11",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "12",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "13",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "14",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "15",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "16",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "17",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "18",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "19",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "20",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "21",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "22",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "23",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "24",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "25",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "26",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "27",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "28",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "29",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "30",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "5",
              "trial_cnt": "31",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testPureHL",
              "blockType": "test",
              "blockCondition": "pure",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "bothPractice + feedback",
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EU ostatku zadatka, procjene parnosti i veličine prikazanog broja pravilno će se izmjenjivati.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ENapominjemo, ako je broj prikazan u BIJELOM kvadratu, trebate procijeniti njegovu PARNOST.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EAko je broj prikazan u SIVOM kvadratu, trebate procijeniti njegovu VELIČINU.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESada slijedi nekoliko zadataka za uvježbavanje, u kojima ćete dobivati povratnu informaciju o svojoj točnosti.\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli zadatke za uvježbavanje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "6",
              "trial_cnt": "0",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "1",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "2",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "3",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "4",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "5",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "6",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "7",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "8",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "9",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "10",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "11",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "12",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "13",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "14",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "15",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "16",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "17",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "18",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "19",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "20",
              "task": "odd-even",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "21",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "22",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "6",
              "trial_cnt": "23",
              "task": "high-low",
              "feedback": "yes",
              "blockName": "practiceMixedFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 25,
                    "top": -25,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "bothPractice",
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EU sljedećem nizu pokušaja za vježbu rješavat ćete isti zadatak, ali sada nećete dobivati povratnu informaciju o točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli zadatke za uvježbavanje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "7",
              "trial_cnt": "0",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "1",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "2",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "3",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "4",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "5",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "6",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "7",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "8",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "9",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "10",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "11",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "12",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "13",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "14",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "15",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "16",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "17",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "18",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "19",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "20",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "21",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "22",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "7",
              "trial_cnt": "23",
              "task": "high-low",
              "feedback": "no",
              "blockName": "practiceMixedNoFeed",
              "blockType": "practice",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "bothTEST_1",
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EOvo je kraj zadataka za uvježbavanje.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESlijede testni zadaci, u kojima nećete dobivati povratnu informaciju o svojoj točnosti.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EZadaci su podijeljeni u dva bloka, između kojih možete uzeti pauzu.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EPokušajte raditi što brže i što točnije možete.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli mjerenje.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "8",
              "trial_cnt": "0",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "1",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "2",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "3",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "4",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "5",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "6",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "7",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "8",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "9",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "10",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "11",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "12",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "13",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "14",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "15",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "16",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "17",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "18",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "19",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "20",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "21",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "22",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "23",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "24",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "25",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "26",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "27",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "28",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "29",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "30",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "31",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "32",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "33",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "34",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "35",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "36",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "37",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "38",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "39",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "40",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "41",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "42",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "43",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "44",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "45",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "46",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "47",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "48",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "49",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "50",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "51",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "52",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "53",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "54",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "55",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "56",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "57",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "58",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "59",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "60",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "61",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "62",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "63",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "64",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "65",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "66",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "67",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "68",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "69",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "70",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "8",
              "trial_cnt": "71",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "bothTEST_2",
      "content": [
        {
          "type": "lab.html.Screen",
          "responses": {
            "keypress(Enter)": "Start"
          },
          "messageHandlers": {},
          "title": "Uputa",
          "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EUPUTA\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EOvo je kraj prvog bloka miješanih zadataka.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003ESlobodno uzmite malu pauzu, a kad ste spremni, pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste započeli posljednji blok zadataka.\u003Cp\u003E\r\n\r\n    \u003Cp\u003ESmjestite kažiprst lijeve ruke na tipku \u003Ckbd\u003EA\u003C\u002Fkbd\u003E, a kažiprst desne na tipku \u003Ckbd\u003EL\u003C\u002Fkbd\u003E. Sami zadatak započet će odbrojavanjem kako biste se pripremili na prikazivanje brojeva!\u003C\u002Fp\u003E\r\n      \r\n      \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Pritisnite \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E kako biste nastavili s drugim blokom.\r\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": 26.17,
              "top": -26.17,
              "angle": 0,
              "width": 1380.64,
              "height": 1380.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "rect",
              "left": -24.03,
              "top": 24.03,
              "angle": 0,
              "width": 1301.19,
              "height": 1301.19,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 17.8,
              "height": 36.16,
              "stroke": "#ffffff",
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block_cnt": "9",
              "trial_cnt": "0",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "1",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "2",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "3",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "4",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "5",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "6",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "7",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "8",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "9",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "10",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "11",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "12",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "13",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "14",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "15",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "16",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "17",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "18",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "19",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "20",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "21",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "22",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "23",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "24",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "25",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "26",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "27",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "28",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "29",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "30",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "31",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "32",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "33",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "34",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "35",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "36",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "37",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "38",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "39",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "40",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "41",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "42",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "43",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "44",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "45",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "46",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "47",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "48",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "49",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "50",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "51",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "52",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "53",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "54",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "55",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "56",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "57",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "58",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "59",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "8",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "60",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "61",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "62",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "63",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "7",
              "correctResponse": "L",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "64",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "65",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "2",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "66",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "67",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "4",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "68",
              "task": "odd-even",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "6",
              "correctResponse": "L",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "69",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "3",
              "correctResponse": "A",
              "switch": "switch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "70",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "1",
              "correctResponse": "A",
              "switch": "nonSwitch"
            },
            {
              "block_cnt": "9",
              "trial_cnt": "71",
              "task": "high-low",
              "feedback": "no",
              "blockName": "testMixed",
              "blockType": "test",
              "blockCondition": "mixed",
              "stimulus": "9",
              "correctResponse": "L",
              "switch": "nonSwitch"
            }
          ],
          "responses": {},
          "messageHandlers": {},
          "title": "taskSequence",
          "parameters": {},
          "files": {},
          "sample": {
            "mode": "sequential"
          },
          "timeline": [],
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "responses": {},
            "messageHandlers": {},
            "title": "Trial",
            "parameters": {},
            "files": {},
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 34.56,
                    "top": -34.56,
                    "angle": 0,
                    "width": 1556.83,
                    "height": 1556.83,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
this.state.correct = false;
}
                },
                "title": "empty",
                "timeout": "100"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 1.54,
                    "top": -50.54,
                    "angle": 0,
                    "width": 1295.74,
                    "height": 1295.74,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#000000"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }",
                    "strokeWidth": 1,
                    "fill": "${ parameters.task == 'odd-even' ? 'white' : 'gray' }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 2,
                    "angle": 0,
                    "width": 327.27,
                    "height": 36.16,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.stimulus}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keydown(a)": "A",
                  "keydown(l)": "L"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "target",
                "timeout": "1500",
                "correctResponse": "${ parameters.correctResponse }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -8.63,
                    "top": 8.63,
                    "angle": 0,
                    "width": 1293.34,
                    "height": 1293.34,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "20",
                    "height": 55,
                    "stroke": "${ state.correct ? 'green' : 'red' }",
                    "strokeWidth": 1,
                    "fill": "${ state.correct ? 'green' : 'red' }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "tardy": true,
                "timeout": "700",
                "skip": "${ parameters.feedback == 'no' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -26.59,
                    "top": 26.59,
                    "angle": 0,
                    "width": 1277.31,
                    "height": 1277.31,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "screen",
                "timeout": "700",
                "skip": "${ parameters.feedback == 'yes' }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.html.Screen",
      "responses": {},
      "messageHandlers": {},
      "title": "End",
      "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EZadatak je dovršen!\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"w-s\"\u003E\r\n    \u003Cp\u003EHvala na sudjelovanju!\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Sada možete zatvoriti ovaj prozor.\r\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "files": {}
    }
  ]
})

// Let's go!
study.run()