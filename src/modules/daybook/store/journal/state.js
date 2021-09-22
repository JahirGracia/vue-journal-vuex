 export default () => ({
    isLoading: true,
    entries: [
       {
          id: new Date().getTime(),
          date: new Date().toDateString(),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea quas sapiente, sunt, tempore magni id labore dolores nesciunt fugit, perspiciatis quo assumenda esse fuga at cumque voluptatibus quidem architecto?',
          picature: null
       },
       {
         id: new Date().getTime() + 1000,
         date: new Date().toDateString(),
         text: 'Curabitur at turpis eget neque tincidunt fringilla non vitae justo. Cras a leo sit amet dolor pharetra eleifend. Ut egestas ligula eu aliquet fermentum.',
         picature: null
       },
       {
         id: new Date().getTime() + 2000,
         date: new Date().toDateString(),
         text: 'Quisque maximus et ante vestibulum commodo. Suspendisse vulputate, mauris vitae pharetra faucibus, quam nisi cursus turpis, vel maximus arcu diam eget sapien. Cras vel arcu bibendum, ultrices nisi et, euismod dui.',
         picature: null
       }
    ]
 })