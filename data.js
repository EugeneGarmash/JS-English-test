var colors = [
  '#996600',
  '#6352a2',
  'rgb(131, 36, 36)',
  '#a2dd77',
  '#175778',
  '#50b2b1',
  '#72cdba',
];

// важно помнить, что ответы здесь начинаются с нуля, а не с первого!
var answers = [0,3,1,2,1,0,1,3,0,1,2,0,0,0,1,1,3,2,0,2,1,0,1,0,3,1,1,0,2,3];

var questions = [
  [ 
    '1. ..... to the theatre for ages.  ',
    [
      'A. I haven’t been',
      'B. I haven’t gone',
      'C. I didn’t been',
      'D. I didn’t gone'
    ]
  ],
  [
    '2. A motorbike ..... a car. ',
    [
      'A. doesn’t cost so much as',
      'B. doesn’t cost much as',
      'C. doesn’t cost much than',
      'D. doesn’t cost as much as'
    ]
  ],   
  [
    '3. I told him ...... ',
    [
      'A. don’t go there.',
      'B. not to go there.',
      'C. don’t to go there.',
      'D. that he doesn’t go there.'
    ]
  ],
  [
    '4. I wish ...... ',
    [
      'A. you haven’t said that.',
      'B. you didn’t said that.',
      'C. you hadn’t said that.',
      'D. you don’t say that.'
    ]
  ],
  [
    '5. ..... after the accident. ',
    [
      'A. He had repaired his car',
      'B. He had his car repaired',
      'C. He repairs his car',
      'D. He did his car repaired'
    ]
  ],

  [
    '6. Don’t forget ..... on her birthday! ',
    [
      'A. to call your mother',
      'B. calling your mother',
      'C. call your mother',
      'D. calling to your mother'
    ]
  ],
  [
    '7. If you had asked me ..... to the cinema with you. ',
    [
      'A. I might had gone',
      'B. I might have been',
      'C. I might have gone',
      'D. I might would have'
    ]
  ],
  [
    '8. ..... very early. ',
    [
      'A. They are use to go to bed',
      'B. They usually to go to bed',
      'C. They are used to go to bed',
      'D. They are used to going to bed'
    ]
  ],
  [
    '9. ',
    [
      'A. What’s her new boyfriend like?',
      'B. What’s like her new boyfriend?',
      'C. How is her new boyfriend?',
      'D. How her new boyfriend is?'
    ]
  ],
  [
    '10. ',
    [
      'A. After we had dinner at home, we went to the theatre.',
      'B. After we had had dinner at home, we went to the theatre.',
      'C. After dinner at home, we went to the theatre.',
      'D. After dinner at home, we had gone to the theatre.'
    ]
  ],
  [
    '11. If ..... you were coming, I would have baked a cake! ',
    [
      'A. I would know',
      'B. I would have known',
      'C. I had known',
      'D. I had had known'
    ]
  ],
  [
    '12. The flight to London was ..... expensive than I thought. ',
    [
      'A. more less',
      'B. much less',
      'C. more or less',
      'D. least'
    ]
  ],
  [
    '13. You ..... exhausted after your exam yesterday. ',
    [
      'A. should be',
      'B. must be',
      'C. must been',
      'D. must have been'
    ]
  ],
  [
    '14. It ..... ages since the last time I ..... ',
    [
      'A. has been',
      'B. was be',
      'C. must been',
      'D. must have been'
    ]
  ],
  [
    '15. I ..... Indian food. ',
    [
      'A. eat',
      'B. have ate',
      'C. have eaten',
      'D. ate'
    ]
  ],
  [
    '16. She was late for work today because she ..... to go to the doctor’s. ',
    [
      'A. must',
      'B. had',
      'C. have',
      'D. should'
    ]
  ],
  [   
    '17. I ..... that we arrive on time. I don’t want to miss the beginning. ',
    [
      'A. hope',
      'B. await',
      'C. expect',
      'D. wait'
    ]
  ],
  [   
    '18. If we had told the truth, we could have ..... the entire disagreeable situation completely. ',
    [
      'A. escaped',
      'B. lost',
      'C. avoided',
      'D. missed'
    ]
  ],
  [   
    '19. I had never seen it before, and ..... I knew exactly what to do. ',
    [
      'A. still',
      'B. yet',
      'C. just',
      'D. even'
    ]
  ],
  [  
    '20. I asked my sister if ..... a bottle of perfume for me at the airport. ',
    [
      'A. she had buy',
      'B. she would bought',
      'C. she had bought',
      'D. she bought'
    ]
  ],
  [
    '21. You can exchange the gift ..... it is returned within seven days.',
    [
      ' A. so long that',
      ' B. while',
      ' C. as long as',
      ' D. meanwhile'
    ]
  ],
  [
    '22. You should stop smoking',
    [
      'A. He demanded her to stop smoking.',
      'B. He advised her to stop smoking.',
      'C. He threatened her to stop smoking.',
      'D. He said her to stop smoking.'
    ]
  ],
  [
    '23. We’ll .....my sister to babysit on Friday.',
    [
      'A. have',
      'B. be having',
      'C. get',
      'D. getting'
    ]
  ],
  [
    '24. I blame the Government ..... the increase in crime. ',
    [
      'A. for',
      'B. on',
      'C. about',
      'D. over'
    ]
  ],
  [
    '25. I didn’t understand at first, but then ..... and the answer was clear. ',
    [
      'A. he explained me',
      'B. he explained it me',
      'C. he explained it to me',
      'D. he explained me it'
    ]
  ],
  [
    '26. ..... if you don’t want to. ',
    [
      'A. You mustn’t stay',
      'B. You didn’t stay',
      'C. You oughtn’t stay',
      'D. You needn’t stay'
    ]
  ],
  [ 
    '27. The Acropolis is the greatest building ..... in ancient times. ',
    [
      'A. to be built',
      'B. to have built',
      'C. to have been built',
      'D. built'
    ]
  ],
  [
    '28. He refused ..... responsibility for the accident. ',
    [
      'A. to take',
      'B. take',
      'C. taking',
      'D. took'
    ]
  ],
  [
    '29. He used to be married to an actress, ..... ',
    [
      'A. wasn’t he?',
      'B. didn’t he?',
      'C. wasn’t it?',
      'D. didn’t it?'
    ]
  ],
  [
    '30. She talks to me, ..... friends. ',
    [
      'A. as if we were',
      'B. as if we was',
      'C. like we were',
      'D. if we were'
    ]
  ]
];



