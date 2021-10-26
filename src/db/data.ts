const data = [
  {
    id: 1,
    name: 'Bootcamp1',
    region: 'West Midlands',
    startDate: '2021-05-26',
    students: [
      {
        info: {
          id: 1,
          name: 'Jessie Rutherford',
          username: 'Bennie.Maggio',
          avatar: 'https://cdn.fakercloud.com/avatars/rmlewisuk_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 1', score: 'amber' },
              { type: 'workshop', title: 'Workshop 2', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 1',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Doloribus sed et occaecati libero facere non. Sunt ea est facere qui debitis.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 3', score: 'red' },
              { type: 'workshop', title: 'Workshop 4', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 3',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et quisquam consequatur veritatis. Praesentium similique sit id. Voluptatem repellat voluptatem et.',
            },
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 4',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Et modi recusandae quisquam sed id autem non quia.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Enim non autem eligendi non aliquid.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eos et consequatur distinctio impedit. Quia eaque sit neque. Facere ipsa aut qui.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 5', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 5',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Quidem ad aut nobis aspernatur magnam autem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Debitis libero molestias aut molestiae aut natus quia atque.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Perspiciatis rem molestiae voluptatem ut accusamus magni cumque saepe. Facilis in sequi accusamus fuga dignissimos. Facilis quo veniam ut ipsam.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: true,
            recapTask: { title: 'Advanced JS', score: 'amber', type: 'recap' },
            workshops: [],
            quiz: {
              title: 'Quiz 6',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Odit enim repudiandae voluptatum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Doloremque earum quis. Quo corrupti saepe amet corporis consequatur quisquam ut minima dolorum.',
            },
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 7', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 7',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et autem explicabo et excepturi nemo qui recusandae. Provident aut repellat laborum et reprehenderit soluta omnis aut enim. Eligendi aut sed ut et omnis. Repellendus adipisci et doloremque voluptates soluta maxime quia recusandae.',
            },
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 8', score: 'amber' },
              { type: 'workshop', title: 'Workshop 9', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 8',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Dolores qui corporis repudiandae aut non.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Vel est architecto quo iusto consectetur expedita similique.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Magni vel error rerum quas aspernatur laudantium. Quidem sapiente excepturi repudiandae. Tempore eos sit minima deleniti hic provident. Est sed amet similique aut inventore consequatur est magnam.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 9',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Dolores exercitationem et architecto fugiat dicta ipsa ratione et aut.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Aut necessitatibus et necessitatibus optio rerum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Est soluta omnis voluptas. Officiis odit perspiciatis aliquam sed quo. Et omnis harum autem a sint.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 10', score: 'green' },
              { type: 'workshop', title: 'Workshop 11', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 10',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Dignissimos saepe ut quo sint non odio.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia sit repellendus quasi quisquam rerum quis enim pariatur illo. Consequatur sit aut est est qui temporibus. Aut quia libero natus. Distinctio sed atque tenetur esse ratione.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 11',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Architecto delectus cumque dolores accusamus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Distinctio ut aliquam. Cumque voluptas dolorum quae voluptatibus eius. Enim eaque aut autem corrupti est. Ipsa excepturi adipisci culpa voluptas id aut ab eos quam.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
              { type: 'workshop', title: 'Workshop 13', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Non soluta enim dicta praesentium dolorem et vero illum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Iusto fugiat quis quaerat ab inventore vitae nemo. Consequatur voluptate in nemo nihil sit praesentium rem quia dolorum. Et quas cupiditate a velit assumenda. Sapiente porro consequatur sint quaerat sed et ea.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 13', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 13',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Cum earum necessitatibus dolor et. Et nobis ea dolorum itaque animi voluptate. Et optio facilis saepe quia.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 14',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Possimus et autem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sed eum id suscipit nemo quod. Vitae molestiae autem et eveniet deserunt ut. Harum velit molestiae illum. Nihil consequuntur voluptas sit quasi aperiam.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 15', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 15',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Ratione et placeat dicta. Cupiditate ex magni voluptates velit. Provident in illo ipsa sed sed qui aperiam nesciunt.',
            },
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 17',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Harum sit qui sapiente suscipit delectus odio. Est reiciendis officiis corporis sint quas ratione asperiores. Et repellat occaecati ut est.',
            },
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 18', score: 'amber' },
              { type: 'workshop', title: 'Workshop 19', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 18',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Vel deserunt officiis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Repellendus sequi sit iste delectus omnis qui quas. Neque officia corrupti ea. Temporibus dolorem consectetur. Et ea officia consequatur illo voluptas.',
            },
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 19', score: 'green' },
              { type: 'workshop', title: 'Workshop 20', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 19',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Eveniet architecto doloremque quo autem est. Ut iure adipisci similique nihil vel accusamus.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 20', score: 'red' },
              { type: 'workshop', title: 'Workshop 21', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 20',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Ex voluptates amet consequatur veniam eos soluta quidem excepturi.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ea alias nobis amet quaerat atque quae sed. Repellendus consequatur est labore rem. Nobis quibusdam sit ratione ratione. Error laboriosam modi asperiores.',
            },
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 21', score: 'green' },
              { type: 'workshop', title: 'Workshop 22', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 21',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Tempora ipsam ut beatae odit beatae.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Modi et quo nesciunt. Minus dolorum doloribus aut porro omnis maxime. Tenetur qui rerum quia rerum expedita numquam nam accusantium at.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Est unde facilis eius vero odio reprehenderit distinctio itaque quia.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ipsum qui laboriosam hic alias cupiditate repellat optio perspiciatis. Aspernatur qui nisi dolores debitis ullam.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 24', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 24',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Nobis nulla neque qui consequatur quae quia. Est in in numquam sed illum inventore nesciunt consectetur. Laboriosam nam est veniam architecto sit aut aut harum molestiae. Cupiditate possimus necessitatibus nesciunt eum impedit adipisci officiis ducimus explicabo.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 25', score: 'amber' },
              { type: 'workshop', title: 'Workshop 26', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 25',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Ex magni pariatur delectus at.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Fugiat et velit et unde quo ut qui perferendis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Laboriosam et voluptas. Accusantium facere cum eos aut dolorem quas. Distinctio asperiores in quia labore sint.',
            },
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 26', score: 'red' },
              { type: 'workshop', title: 'Workshop 27', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 26',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Magnam eum autem.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content: 'Praesentium dicta distinctio qui et. Sunt maiores et.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 27', score: 'red' },
              { type: 'workshop', title: 'Workshop 28', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 27',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Eos enim fuga qui et nostrum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Est atque explicabo.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ipsum vitae quas. Totam aut aut eos provident. Aut optio tempora in. Atque rerum placeat ut officia animi reprehenderit commodi expedita.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 28',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Tenetur non facere et.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Nesciunt quasi quasi quo qui repellat minus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ut quia eaque aut mollitia sed qui voluptatem ad. Commodi recusandae vero. Doloremque consectetur nam molestias esse consequatur aspernatur. Cupiditate quam eos fugiat numquam.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 30',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Officiis ab iste.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Placeat rerum rem impedit. Tenetur quae facilis quo qui. Quia illo qui facere.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
              { type: 'workshop', title: 'Workshop 32', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 31',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Sunt et sapiente culpa vitae.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Repudiandae ut ex fugit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Omnis et harum dolorum delectus dicta fuga ut. Nulla modi eveniet aut animi suscipit.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 32',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Repellendus maxime quae debitis dolores occaecati possimus.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Qui odio debitis delectus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Impedit recusandae magnam occaecati ducimus. Sit enim autem assumenda quia veritatis facere dolores. Facilis cupiditate voluptatem officia et velit itaque aut molestiae.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 33',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Incidunt nesciunt voluptatem nihil deserunt nihil distinctio. Maxime quidem aspernatur. A dignissimos ipsa voluptatem autem dignissimos labore earum corrupti perspiciatis. Tempore similique sunt.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 34', score: 'amber' },
              { type: 'workshop', title: 'Workshop 35', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 34',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Dolorem voluptas voluptatibus ab.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Quasi est qui voluptatibus labore accusamus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Molestiae sit similique molestias ut omnis. Error totam doloremque aut neque aliquid sed nihil tenetur.',
            },
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 35',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Vero pariatur officiis in animi non minima nesciunt aut. Quos ea quae. Itaque magni placeat quibusdam at cumque. Quam tempore cumque voluptatem.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 37', score: 'green' },
              { type: 'workshop', title: 'Workshop 38', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 37',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Ad et nostrum quidem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Sit occaecati distinctio minima.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nesciunt praesentium quidem in hic veniam voluptatem laudantium. Sint excepturi ut modi ipsam aut saepe. Aperiam totam perspiciatis reprehenderit voluptatem.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 38',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Quia fugiat amet qui voluptates enim quis vitae harum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Temporibus assumenda molestiae omnis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Reiciendis omnis impedit qui vel aut rerum voluptas dolores. Nihil nulla aut voluptas ut quam explicabo quas nemo architecto. Eum itaque voluptatum illum voluptatem.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 40', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 40',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Illo quaerat delectus voluptates.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et et hic excepturi accusantium cumque. Nisi et eaque reiciendis. Asperiores pariatur qui. Dolorum et maiores et.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 41',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Qui eius magni consequatur illum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Assumenda blanditiis optio deserunt aperiam dolor fugit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Atque non laborum. Exercitationem incidunt ab necessitatibus. Ad voluptatum aliquam accusamus ducimus odit facere voluptas exercitationem iure.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'amber' },
              { type: 'workshop', title: 'Workshop 43', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Necessitatibus dolores consequatur.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Doloremque et nesciunt mollitia odit ut. Et deserunt sunt voluptatem. Sed consequuntur molestias natus illo. Quam aut odio aut.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 43', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 43',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quia nobis modi animi omnis. Esse doloribus consequatur illo est consequuntur temporibus.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 46', score: 'amber' },
              { type: 'workshop', title: 'Workshop 47', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 46',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Accusantium totam eos dolorem sit exercitationem necessitatibus hic totam. Repellat earum hic dolores.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 47',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Unde illum deleniti ea dolore sed.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Nemo id voluptas optio veniam quaerat omnis quia quidem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Molestiae rerum beatae voluptatem vero iste sed rerum expedita culpa. Corporis perferendis aspernatur aut odit voluptatem saepe. Quasi pariatur fuga voluptas aliquid voluptate doloremque consectetur ducimus quibusdam. Tempora deleniti fugit ea perspiciatis vitae molestias illo.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 48',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quis enim illo consequatur eius inventore. Ut dolores quaerat quas dolores aut. Dolorem id est repellat minima. Rerum accusantium sit sint ipsam in fugit.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 49', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 49',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Quaerat qui aliquam ullam accusantium eligendi aut inventore.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Placeat ea numquam. Qui rem sint vero est deleniti officia exercitationem consequatur sed. Veniam libero animi ut ea mollitia veniam explicabo.',
            },
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 51',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Tempora sed rerum ipsa asperiores itaque numquam.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sunt veritatis aut. Odit doloribus est neque quas et quia eum voluptas.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 52', score: 'amber' },
              { type: 'workshop', title: 'Workshop 53', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 52',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Mollitia saepe provident ipsa cupiditate aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem sed voluptas dolores odit saepe non accusamus quia. Deleniti accusantium ut pariatur eum autem eligendi necessitatibus sit. Laudantium et dolor accusantium nam sit porro ut incidunt.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 53', score: 'amber' },
              { type: 'workshop', title: 'Workshop 54', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 53',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Similique explicabo voluptas.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sunt repudiandae omnis cum eum quam sunt illo. Quas laboriosam odit nihil qui expedita consequatur vero voluptatem dolores. Totam saepe cumque dolorum ut quas dolorum error reprehenderit. Quia ipsa voluptatum.',
            },
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 54', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 54',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Consectetur sed ipsa id veritatis rerum sed.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dicta commodi doloremque eos sunt. Quos distinctio qui labore.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 55', score: 'amber' },
              { type: 'workshop', title: 'Workshop 56', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 55',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Saepe facere id provident quod ex. Dolores quidem enim aut.',
            },
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: true,
            recapTask: {
              title: 'Platform and cloud engineering',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 56', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 56',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content: 'Eum commodi dolores laboriosam. Error voluptas nisi.',
            },
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 57', score: 'green' },
              { type: 'workshop', title: 'Workshop 58', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 57',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Reprehenderit soluta id ratione. Est vel ut eum fugiat voluptates aperiam. Nobis placeat veritatis impedit et vel dolores. Quia repellat consectetur incidunt asperiores esse odit assumenda.',
            },
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 58', score: 'amber' },
              { type: 'workshop', title: 'Workshop 59', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 58',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Aliquid non aut. Cupiditate nisi doloribus consequatur et. Reprehenderit natus et.',
            },
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 60', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 60',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Deleniti et perspiciatis saepe eum facilis quibusdam inventore vel.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Maiores qui magnam. Impedit doloremque optio alias quis dolorum. Beatae non laborum qui quam veritatis repudiandae officia.',
            },
          },
        ],
      },
      {
        info: {
          id: 2,
          name: 'Mr. Candace Wilkinson',
          username: 'Emma_Kohler',
          avatar: 'https://cdn.fakercloud.com/avatars/demersdesigns_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 1', score: 'amber' },
              { type: 'workshop', title: 'Workshop 2', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 1',
              score: '7/14',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Commodi culpa sint aspernatur quam accusamus sunt. Ratione quod illo. Laudantium sit quia id magni et quasi et.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 3', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 3',
              score: '5/8',
              percentage: 63,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Esse nostrum odit est nulla pariatur id ipsam. Ut totam nihil. Quasi et tempore sint asperiores suscipit.',
            },
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 4', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 4',
              score: '5/9',
              percentage: 56,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Sunt veritatis quia iure voluptate natus voluptatem eos est eum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Excepturi laborum omnis et possimus hic id maiores earum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Qui similique numquam cumque. Aut ipsum reiciendis corporis. Enim dignissimos voluptate qui officia voluptatibus est iste. Et et est ducimus laboriosam in quibusdam blanditiis quibusdam.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 5', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 5',
              score: '5/9',
              percentage: 56,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Nobis iste architecto qui omnis soluta sit et nobis inventore.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Debitis et quia eligendi ut veritatis velit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Officia ipsam atque quia nihil. Dignissimos sequi deleniti non non amet cumque.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: true,
            recapTask: { title: 'Advanced JS', score: 'red', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 6', score: 'amber' },
              { type: 'workshop', title: 'Workshop 7', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 6',
              score: '8/15',
              percentage: 54,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Magnam hic est sed incidunt quia. Et et dicta qui aut ipsam omnis facere id itaque. Provident ea architecto in in sint ad nostrum harum.',
            },
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 7',
              score: '7/13',
              percentage: 54,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Officiis sed quibusdam nostrum alias amet sint.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Harum aut id quaerat eveniet. Est a sequi velit dolorem non.',
            },
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 8', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 8',
              score: '7/14',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Quisquam eligendi neque qui.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ab est quia. Architecto tempore eum veniam consequuntur laudantium ducimus. Ut cum vel ullam ut ea quia.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 9', score: 'amber' },
              { type: 'workshop', title: 'Workshop 10', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 9',
              score: '7/15',
              percentage: 47,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Adipisci distinctio sapiente hic. Vero cum officiis omnis veritatis. Animi illo veniam quia dolorum.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 10',
              score: '7/14',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Odio tenetur in quas sed fuga et facilis.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Eveniet consectetur rerum ab nihil in architecto quia ut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Accusamus eos at voluptas quo iure dolores ea. Dolores excepturi molestias ex odit qui. Veniam vero hic. Nisi hic iste eius quia vero.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 11', score: 'red' },
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 11',
              score: '7/14',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Doloremque fuga dolor praesentium ad pariatur vel eius.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Dolor enim facilis quaerat similique quis officia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Tenetur distinctio quibusdam quo placeat illum nemo. Inventore consequatur minima in labore asperiores consequatur rerum commodi laudantium.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 12',
              score: '7/13',
              percentage: 54,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Labore illum maxime nihil nostrum ut id ea.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Soluta consequatur quasi iusto.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptas hic nam. Dolores ullam sit repellendus sequi qui distinctio itaque. Magni totam eum ad quibusdam accusamus.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 13',
              score: '6/11',
              percentage: 55,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Minima odio dolor eos rerum. Fugiat corrupti accusantium ut. Atque et aut cum est excepturi temporibus quam.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 14', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 14',
              score: '8/14',
              percentage: 58,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Eaque nam commodi impedit earum reprehenderit.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Qui alias ex nisi dolores dolorem asperiores explicabo mollitia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Id ut animi ipsa quidem accusantium consequatur asperiores officiis. Quas dicta alias non ex vel sint officiis reiciendis sint. Aut eligendi facere nobis.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 15', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 15',
              score: '9/15',
              percentage: 60,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Et laudantium ut quidem minus.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Est et hic incidunt a excepturi eum dolorem distinctio.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Assumenda laboriosam numquam exercitationem architecto quis doloribus totam perferendis. Ut perspiciatis dicta quisquam et.',
            },
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 17', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 17',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Incidunt debitis nam aliquam.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolores perspiciatis facilis qui ab velit cumque sit minima ab. Ipsa quo aliquam sequi nihil ipsam corrupti a.',
            },
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 18', score: 'amber' },
              { type: 'workshop', title: 'Workshop 19', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 18',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Minima quisquam in ipsam voluptatem fuga aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Explicabo qui exercitationem blanditiis reprehenderit magnam. Labore iure quidem reiciendis cupiditate eligendi vero delectus. Soluta debitis et aliquid repudiandae.',
            },
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 19', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 19',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Nulla voluptas porro maxime et.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et id aut est quam vel reiciendis. Delectus omnis nemo assumenda. Quia omnis harum odio ut et quasi mollitia.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 20', score: 'amber' },
              { type: 'workshop', title: 'Workshop 21', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 20',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Dolor mollitia iure doloribus voluptatem odit vero. Ut molestiae blanditiis consequatur hic et nostrum dignissimos magni ut.',
            },
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 22', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 22',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Non adipisci autem aut vero fugit exercitationem. Facilis quasi et mollitia sequi nam similique iure. Quo aut iusto quia perferendis.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'amber' },
              { type: 'workshop', title: 'Workshop 24', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Illum ullam dicta ea accusamus neque perspiciatis id.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Fugiat facere blanditiis natus repudiandae provident minus est sed. Porro aut commodi sed error dolores totam ut id laudantium. Repellendus sed sed at qui. Perferendis hic sit unde sed.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 24',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Eaque doloremque qui dolor magni illum. Aliquid omnis aut.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 25', score: 'amber' },
              { type: 'workshop', title: 'Workshop 26', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 25',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Odit blanditiis quia omnis assumenda vel odit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eius aut hic quia quo consequatur. Dolores eligendi cumque odio et occaecati laborum. Aliquid quod cum nisi ea non non consectetur aliquam voluptate. In nihil iusto.',
            },
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 26', score: 'red' },
              { type: 'workshop', title: 'Workshop 27', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 26',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Labore repellat enim fugit aliquam ut autem fugit dolor.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Qui modi laudantium amet distinctio rerum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Possimus enim ex. Autem rerum nam. Ea architecto illo dolorem. Commodi error et praesentium numquam delectus qui.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 27', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 27',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Occaecati similique necessitatibus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Perferendis eveniet reprehenderit quisquam voluptatem sit. Corporis laudantium eos explicabo saepe. Autem voluptas facilis aut suscipit sint.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 28', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 28',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Cupiditate totam ut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Omnis quia quo qui. Aspernatur voluptatem libero doloribus sunt rerum eaque. Maiores veniam qui non nisi quis natus eum reiciendis.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 30',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Incidunt officia accusamus voluptas quo hic ut sit perspiciatis placeat.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nam omnis sequi aut in quasi animi aperiam aspernatur. Necessitatibus dolores et libero id.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 32', score: 'amber' },
              { type: 'workshop', title: 'Workshop 33', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 32',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Similique et ut nulla officia quia.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quos dicta maiores provident mollitia est atque voluptatem qui quis. Esse asperiores dolores quia qui enim dolorem magnam omnis. Ut qui aut.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 33', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 33',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Earum nihil eveniet numquam. Labore error eum omnis aut eligendi et qui consequatur. Ducimus vel molestiae labore voluptas perferendis nulla et.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 34',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Et neque sit molestiae dolorem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sit et temporibus aut quo. Vitae unde laudantium velit iusto placeat suscipit provident.',
            },
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 35', score: 'green' },
              { type: 'workshop', title: 'Workshop 36', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 35',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et qui molestias aut dolore quia. Repudiandae rerum ipsum facilis et doloribus laudantium voluptatem. Blanditiis sed ut error distinctio quisquam incidunt perspiciatis iusto ipsa.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'red', type: 'recap' },
            workshops: [],
            quiz: {
              title: 'Quiz 36',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Aut rerum voluptas amet.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Omnis consectetur consequatur laudantium corporis autem et consequuntur dolorem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quod nostrum non itaque dolor id sunt facilis. Ab ut blanditiis mollitia est rem cupiditate debitis atque. Voluptatem corporis nihil natus qui id voluptatem saepe vel. Non dicta voluptas sit.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 37', score: 'green' },
              { type: 'workshop', title: 'Workshop 38', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 37',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Ex rerum deleniti eligendi culpa autem aliquid.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et veniam eum ullam eius delectus nihil. Minima molestias commodi tenetur laudantium aut mollitia harum est. Est eum ea nostrum blanditiis repudiandae quam quos.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 38', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 38',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Enim aut qui.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quis minus impedit cumque perferendis. Est tempora eius iure quae ipsum. Magnam soluta facilis necessitatibus est illum quo.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 39', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 39',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Ullam veritatis saepe aliquid nulla exercitationem adipisci.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quam fugiat molestias eligendi nam molestias ducimus. Rerum et libero nihil tenetur explicabo nostrum. Eius sed aut.',
            },
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 41', score: 'green' },
              { type: 'workshop', title: 'Workshop 42', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 41',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Natus alias dolor sapiente.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Est rerum voluptas ipsam magnam aut quis velit fuga. Voluptates necessitatibus possimus cumque nihil soluta id itaque laboriosam.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'amber' },
              { type: 'workshop', title: 'Workshop 43', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Est sed doloremque et voluptas alias veniam aut sint.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Reprehenderit rerum corporis culpa qui. Ut voluptate rerum quis.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 43', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 43',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Aut libero vero cum voluptatum qui laboriosam et. Quis laboriosam eum explicabo.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 45',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Saepe qui quia neque tempore enim sunt.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sunt voluptates recusandae id et. Sunt ut ex dolores consequatur minima inventore nam voluptatem beatae. Hic nostrum repellendus reprehenderit animi dolor.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 46', score: 'amber' },
              { type: 'workshop', title: 'Workshop 47', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 46',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Perferendis neque vel tempore tempora ea.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Id omnis dolores magnam. Est nobis soluta aliquam et ut explicabo. Molestiae et dolor laboriosam.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 47',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Dignissimos incidunt sint provident impedit corporis vero ipsum.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eveniet qui neque incidunt eaque est officiis eum. Quam aliquam explicabo error non dolore quae.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 48', score: 'amber' },
              { type: 'workshop', title: 'Workshop 49', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 48',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Nisi maxime recusandae dicta a voluptatum fugiat accusantium alias.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Incidunt quasi consectetur odit possimus eaque in praesentium et.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem rerum ipsa distinctio eos sed iste. Atque blanditiis qui aut eos esse est. Officiis recusandae eum.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 49', score: 'amber' },
              { type: 'workshop', title: 'Workshop 50', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 49',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Impedit provident tempore in sint modi quo numquam placeat dolores.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Numquam est est velit quod et. Eveniet rem officiis ea et praesentium. Soluta aliquam quos veritatis labore inventore quaerat placeat.',
            },
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 50',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Consequatur rerum ut rerum cum et vel accusantium aut eos.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Distinctio ullam nulla nihil ut laborum. Sunt sed et aut eos modi ipsam quo expedita. Iure quibusdam quisquam consequuntur minima accusantium.',
            },
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 51', score: 'amber' },
              { type: 'workshop', title: 'Workshop 52', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 51',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Animi laudantium non eveniet omnis tempore.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et animi facere facilis. Consequatur voluptas magni. Provident et provident aut iure eos quae. Autem laboriosam vel exercitationem eligendi.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 52',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Architecto dolores amet harum temporibus sapiente et odio iure explicabo.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Velit et esse. Quis possimus quo incidunt quia voluptas. Minima blanditiis aut. Est facere repellendus consequatur et.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 53', score: 'amber' },
              { type: 'workshop', title: 'Workshop 54', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 53',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Earum aut quis quas rerum voluptatem libero ea.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Non suscipit et pariatur voluptas qui nostrum. Consectetur et nihil ad ut consequatur sit. Provident dignissimos et est officia error deleniti placeat.',
            },
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 54',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Ut exercitationem odit tempore labore nobis cumque sit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Unde qui blanditiis temporibus amet. Maxime est quas necessitatibus porro ipsam eum sit rerum.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: true,
            recapTask: {
              title: 'Platform and cloud engineering',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 56',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Repellendus atque natus quia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quam a illum rerum fugiat qui autem libero eaque vero. Ducimus maxime quisquam et. Sint modi totam inventore nostrum amet eum. Voluptas ut ut ut in ut aut ut.',
            },
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 57', score: 'amber' },
              { type: 'workshop', title: 'Workshop 58', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 57',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Molestiae voluptate nulla nesciunt fugiat repellat officiis rerum at repudiandae. Tempora atque facilis non vel rem cumque laborum.',
            },
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 58',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Qui dolorem facere nisi aut iste recusandae.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Sed excepturi voluptas eaque omnis eveniet eum minima voluptatem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Veritatis est dolor reiciendis qui ratione reiciendis id iusto ea. Beatae qui labore autem. Expedita quia neque voluptas voluptatibus odit. A eaque fugit velit voluptatem quia qui quibusdam iusto.',
            },
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 59', score: 'red' },
              { type: 'workshop', title: 'Workshop 60', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 59',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Eveniet asperiores sed officia ut. Aperiam accusamus molestias pariatur aut error aut mollitia. Eligendi voluptate aperiam.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 60', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 60',
              score: '8/13',
              percentage: 62,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Eos dolor consequatur omnis eveniet.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Omnis est eum tenetur temporibus fugit non dolorem necessitatibus. Est dignissimos omnis error cum doloremque.',
            },
          },
        ],
      },
      {
        info: {
          id: 3,
          name: 'Ora Wolff',
          username: 'Kaya_Purdy',
          avatar: 'https://cdn.fakercloud.com/avatars/mrjamesnoble_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 2',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Cupiditate qui quia occaecati consequatur aut nihil.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Iure facere doloribus dicta.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Blanditiis est reiciendis ut. Recusandae est rerum.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 5', score: 'red' },
              { type: 'workshop', title: 'Workshop 6', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 5',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Quibusdam delectus et cumque eaque assumenda laborum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Laudantium excepturi deleniti eaque eius quaerat.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eaque dolorum autem laborum harum enim possimus minima quaerat harum. Eum asperiores praesentium cupiditate porro hic expedita aut nulla. Vitae amet voluptatem.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 7', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 7',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Ad delectus voluptas.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Qui est neque fugiat aspernatur ut harum aut. Sit quaerat ut saepe est quia porro. Placeat dolor consequatur est sit.',
            },
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 8', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 8',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Libero assumenda voluptatem cum asperiores numquam at ad et quia.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Placeat quibusdam rerum quod quidem quod voluptatem sunt quaerat.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Iure sed consequatur accusamus est dolorum esse accusantium laboriosam. Laboriosam explicabo est. Et cumque magnam odio magni quasi. Perferendis minima fugit id corporis aliquid.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 9', score: 'amber' },
              { type: 'workshop', title: 'Workshop 10', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 9',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Recusandae sit deleniti sint.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Neque quis sint molestiae sed natus. Voluptatum voluptates et ab in velit est eum optio dicta. Libero nostrum sed molestias sed voluptates.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 10', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 10',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Voluptatem placeat deserunt recusandae praesentium repudiandae enim magni consectetur quaerat.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rem quaerat at iusto. Quo totam nostrum quas ex qui officia quod. Omnis ut sed eaque consequuntur amet explicabo hic maiores id.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 11', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 11',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Rerum laborum sint adipisci ad aut vero velit ab. Quas aut laboriosam deleniti sit itaque.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
              { type: 'workshop', title: 'Workshop 13', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Eius eum est qui autem et praesentium voluptatum.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et laborum tenetur vero aspernatur inventore iste incidunt molestias perferendis. Sit error natus.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 13',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Est sunt aperiam ab vitae.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Accusantium inventore voluptatum quia libero esse aut. Quia aut quos eos tempore fugiat expedita voluptas praesentium.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 14',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Veritatis provident beatae consequatur ducimus.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Neque facere voluptas in. Repellendus adipisci delectus debitis asperiores culpa vero sit aut ut. Aut quod nihil consequatur cupiditate consectetur nihil non.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: true,
            recapTask: {
              title: 'Databases and APIs',
              score: 'red',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 16', score: 'amber' },
              { type: 'workshop', title: 'Workshop 17', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 16',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Nam ex error molestiae excepturi provident veritatis aut excepturi ab.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum et officiis incidunt. Laudantium neque minus sunt.',
            },
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 20', score: 'red' },
              { type: 'workshop', title: 'Workshop 21', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 20',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Deserunt nobis vel. Esse laudantium fuga. Sed ut rem necessitatibus.',
            },
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 21',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Nulla modi tenetur expedita voluptate dolores reprehenderit ea dolorum suscipit. Animi voluptatem ipsa beatae id. Temporibus aperiam nemo sit sint consequatur. Aut expedita repellendus blanditiis rerum aut aut quis rerum harum.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'amber' },
              { type: 'workshop', title: 'Workshop 24', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Eligendi est possimus est et in inventore et omnis sunt.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Tenetur minus eos occaecati sed molestiae delectus est magnam. Culpa ad voluptatem mollitia quo sequi eveniet.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 24',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Quia recusandae architecto hic illo cupiditate.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aliquid dolor quibusdam minima qui earum. Ipsum veniam necessitatibus quasi voluptas laboriosam voluptatem est.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 25',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Eveniet ex est cupiditate pariatur animi.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Et ut est sunt.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et odit dolor. Ipsum alias ratione. Ea voluptate et et. A et quo adipisci aut et et asperiores repudiandae.',
            },
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 26', score: 'amber' },
              { type: 'workshop', title: 'Workshop 27', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 26',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Ducimus sequi fuga temporibus aut totam ut laboriosam.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Qui quam sed labore.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Labore illo sunt aut reprehenderit ut. Ipsam possimus pariatur eos placeat. Aut exercitationem quos iure architecto. Dolorem tempora nostrum ut molestiae aut dolores possimus labore.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 27',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Fugit non ea delectus voluptatem officia.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Atque alias ut molestias et eveniet.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quod qui quia et est ut dolores. Et repellendus et qui corporis aperiam et dolorem aliquam porro. Explicabo expedita dolorum voluptatem molestiae. Inventore amet saepe architecto.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 28', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 28',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Quibusdam deserunt aliquam doloribus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aperiam magni tempora provident. Non iure sit pariatur quidem laudantium voluptates ut. Sit neque sunt soluta error provident dicta beatae aut.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 29', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 29',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Eligendi ea consectetur sed.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolorem eligendi repellat qui veritatis. Dolores et cum tempore sed.',
            },
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 30', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 30',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Qui odio harum quo omnis.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Ipsum et ut sint delectus aut omnis quibusdam omnis occaecati.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Doloribus architecto nulla repellat vel qui consequatur itaque. Ut ad enim sit commodi accusamus. Aliquam sint doloremque amet voluptas omnis officia ut accusamus. Eos ut sapiente est blanditiis alias iure quaerat.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 31',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem ea dolorum maiores quis. Aperiam totam rerum alias. Voluptate ut voluptatem non. Accusamus vero accusamus eos ut.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 32', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 32',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Aut sit totam.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Numquam totam pariatur fuga nobis deleniti alias. Sit dignissimos ut et. Et quia repellat itaque blanditiis est. Consequuntur voluptatibus nihil aut autem.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 33',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Quod nulla dolor quae qui.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Et sed rerum ut libero.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Non praesentium aspernatur rem et voluptate. Voluptas amet laboriosam ad.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 35',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Id aperiam at rerum dolor quia qui omnis aut modi.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Porro illum incidunt quia. Cum in non laborum asperiores consequatur. Sint doloribus ea ab repudiandae pariatur necessitatibus quaerat sint expedita.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'amber', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 36', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 36',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Tempore et nihil et quia voluptate amet.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Nemo non occaecati et esse rem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Inventore enim ipsam sit. Est consequatur dolores officia aut quas autem sint repellendus dignissimos.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 37', score: 'amber' },
              { type: 'workshop', title: 'Workshop 38', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 37',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Distinctio optio quod iure sint harum.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Architecto rem voluptas dolore dignissimos et reprehenderit fugit. Quisquam fugit dolore illo. Porro omnis illo architecto dolores.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 39',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Laborum odit dolore sed corrupti. Sit vel dolores et ipsum qui sunt et tempore dolor. Et facere nam qui temporibus ut molestias doloremque explicabo.',
            },
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 40',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Placeat et et eveniet sed voluptatem est sed.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ipsum enim et recusandae illo molestias sit sit non consequatur. Aliquam odio nihil. Eaque aut unde similique et voluptatem assumenda qui quibusdam rerum.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 41', score: 'red' },
              { type: 'workshop', title: 'Workshop 42', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 41',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Non numquam non laborum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nam quia aliquid asperiores temporibus soluta minus sint omnis. Voluptatum aut nesciunt. Et tempore qui repellendus explicabo rerum.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 43', score: 'amber' },
              { type: 'workshop', title: 'Workshop 44', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 43',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Aut saepe nobis quod nulla eaque dolore sed quas assumenda.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Repellat dolore expedita quos voluptatibus inventore sit et quasi. Et et magni laborum consequuntur voluptatum sapiente rerum.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 44',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Quia consequatur beatae odit earum dolorum enim nemo sapiente qui.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Reiciendis nobis necessitatibus ea. At et doloribus facilis. Aut consectetur nostrum sint repellendus. Perferendis nihil repellendus autem magnam magnam voluptatum commodi est vitae.',
            },
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 45', score: 'red' },
              { type: 'workshop', title: 'Workshop 46', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 45',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quibusdam distinctio sapiente quisquam magnam reiciendis quos voluptatibus quo id. Quos adipisci velit nulla ut. Odio molestiae architecto et delectus quia.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 46',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quo facere eaque fuga. Accusamus cumque aut et. In quod nobis facere rerum aliquam et. Veritatis temporibus aliquam porro aut.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 47', score: 'amber' },
              { type: 'workshop', title: 'Workshop 48', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 47',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Totam cupiditate amet porro aut sint.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Amet placeat hic harum blanditiis officia cupiditate. Aut nemo aspernatur vel libero. Est ea quia facilis perspiciatis quia mollitia.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 48', score: 'red' },
              { type: 'workshop', title: 'Workshop 49', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 48',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Dolores aliquid eius incidunt et qui enim recusandae nulla consequuntur.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Non hic consequatur labore in est aperiam. Qui deserunt nesciunt qui et reiciendis odio quo dolorem molestiae. Veritatis voluptatibus quae in porro in dolores corrupti.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 49', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 49',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Vel voluptatem temporibus rerum ea harum. Sed repellat explicabo. Qui quis animi dolorem et labore qui dignissimos quasi aperiam. Rem magnam porro quis et aut.',
            },
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 50',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Ea inventore alias possimus blanditiis delectus consequatur. Voluptas distinctio iste dolorem. Nihil voluptas provident dolore beatae distinctio ut. Est quisquam quaerat non eius quia.',
            },
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 51', score: 'green' },
              { type: 'workshop', title: 'Workshop 52', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 51',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Consectetur molestias quia autem.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Maiores quam et ea sint corrupti porro. Dolore consectetur possimus voluptas aliquid natus. In facere deleniti eligendi atque fugit porro dolores.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 52', score: 'green' },
              { type: 'workshop', title: 'Workshop 53', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 52',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Distinctio praesentium voluptas autem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aut vel est enim delectus autem hic cupiditate beatae. Quia tenetur beatae magni. Doloribus qui inventore sint maiores. Laborum maiores ipsam voluptas eveniet modi eum sed eos.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 53', score: 'red' },
              { type: 'workshop', title: 'Workshop 54', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 53',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Atque officia nemo qui et consequatur quaerat temporibus. In fuga adipisci quia porro exercitationem temporibus repellat. Velit ullam qui atque officiis.',
            },
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 54', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 54',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Non nam nemo et voluptas quis sapiente aliquam. Ipsam rerum aut nisi atque nulla fuga dolorum. Sed est deserunt velit nulla aut rerum sunt fugit. Quod assumenda et officia in voluptates.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 55', score: 'amber' },
              { type: 'workshop', title: 'Workshop 56', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 55',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Porro et labore ab tenetur.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Est occaecati qui quia occaecati. Fugiat incidunt id sit quo accusantium dolorem ipsum qui. Nam fuga voluptatem incidunt accusantium harum. Voluptas consequatur et rerum.',
            },
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: true,
            recapTask: {
              title: 'Platform and cloud engineering',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 56', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 56',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quia beatae quisquam nam vel facilis. Tempora sit fugiat molestiae accusantium nisi ut sit maxime omnis. Tenetur iste omnis ea veniam.',
            },
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 58', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 58',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Aspernatur iste accusamus pariatur.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vel molestiae quam inventore quibusdam molestias dicta dolore eveniet nostrum. Vel nam quis nobis laborum.',
            },
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
        ],
      },
      {
        info: {
          id: 4,
          name: 'Traci Wolf',
          username: 'Sven_Kshlerin',
          avatar: 'https://cdn.fakercloud.com/avatars/hgharrygo_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 1', score: 'red' },
              { type: 'workshop', title: 'Workshop 2', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 1',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Ea autem fugit sequi corporis et.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Cupiditate animi placeat odit voluptas eum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum dolores qui officiis ullam soluta velit tempore dolores omnis. Fuga harum cumque vitae libero eaque commodi.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 2',
              score: '8/14',
              percentage: 58,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Est nulla sit autem.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sapiente voluptatem repudiandae optio ipsum ut impedit reprehenderit sunt. Saepe sed laborum ratione nostrum dicta qui quia. Qui aut rerum mollitia. Rerum nihil sed consequatur ut.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 3',
              score: '8/14',
              percentage: 58,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Cupiditate voluptatem in enim.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ut nisi et qui et minus maiores minus. Est cum consequatur inventore veritatis vel quod occaecati non. Qui perferendis excepturi ut quia dolores.',
            },
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 4',
              score: '8/14',
              percentage: 58,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Fugiat odio pariatur sit dolorum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Excepturi explicabo vero id ipsa dolor repellat illum earum vitae.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Culpa et quia saepe cumque est amet. Quasi aut similique vero in officiis sit nihil vel. Consequatur nam sunt nostrum magni tempora eveniet. Repudiandae impedit non sequi.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 5', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 5',
              score: '5/9',
              percentage: 56,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Quam fuga et quia quasi quia velit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vero et voluptatem dolores sint. Quis ea qui reprehenderit expedita ut blanditiis placeat voluptas dolores. Est dolorem facilis. Magnam expedita officia similique illum molestiae.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: true,
            recapTask: { title: 'Advanced JS', score: 'red', type: 'recap' },
            workshops: [],
            quiz: {
              title: 'Quiz 6',
              score: '9/15',
              percentage: 60,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Iste accusantium repellat.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Non voluptas voluptatem debitis ab possimus voluptas omnis vitae omnis. Neque et voluptas qui et eum eum.',
            },
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 8', score: 'red' },
              { type: 'workshop', title: 'Workshop 9', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 8',
              score: '7/12',
              percentage: 59,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Odio temporibus dignissimos neque est rerum possimus libero dolores.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolore atque ea modi tempora est itaque sapiente. Ratione quod cum nisi nemo mollitia cumque velit possimus vel. Distinctio fugiat quia voluptatem et corrupti aut nulla. Unde qui fugit rerum.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 9',
              score: '8/13',
              percentage: 62,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Beatae ipsum neque incidunt sint velit consequatur inventore natus.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sint saepe rerum vel ipsum laudantium officia. Iure aliquid fugiat soluta nisi perspiciatis velit ut.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 10', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 10',
              score: '8/13',
              percentage: 62,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Officia sint nemo aut qui atque laboriosam et quo est.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Fuga qui aut. Ratione et dolor itaque nihil.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 11', score: 'amber' },
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 11',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Debitis corporis aliquam id non in.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Omnis qui amet molestiae modi. Consequatur minima magnam. Reiciendis aut quas. Aut ab vel voluptas facere.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Veritatis suscipit officia qui omnis.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Unde sequi odio molestias fuga modi doloremque. Pariatur et est expedita iure enim vitae tempore fuga.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 13', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 13',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Dolore accusantium totam.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Pariatur eius sunt est voluptatibus est in quia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ea alias voluptas assumenda accusamus incidunt eos dignissimos et. Est et dolor perferendis fuga officia a hic. Beatae aperiam quia dolores voluptas sed in iusto reiciendis quis. Ad soluta suscipit incidunt at qui eos earum est.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 14', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 14',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Voluptatem vitae natus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Numquam deserunt quo. Quis blanditiis nam aut facere.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 15', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 15',
              score: '8/13',
              percentage: 62,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Non sunt excepturi voluptatem dolor vel.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Non magnam eum ipsam vitae delectus minima pariatur.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sapiente repellat tempore. Magni ad ut maxime libero porro aut. Atque velit ullam et consectetur ex qui sit ipsum. Saepe vitae cumque quo modi adipisci.',
            },
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: true,
            recapTask: {
              title: 'Databases and APIs',
              score: 'red',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 16', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 16',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Sequi odit velit architecto enim voluptas aut.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Eaque eligendi consequatur laborum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Temporibus rerum recusandae inventore. Modi expedita eius fuga doloribus debitis sed eligendi fugit. Enim repellendus error quibusdam aut. Nemo rerum quidem voluptatibus.',
            },
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 19',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Ipsum repudiandae asperiores qui et est culpa deserunt.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolorem illum qui rerum blanditiis ratione ipsum quidem. Dolores rerum dolores aut nulla modi.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 21', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 21',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Qui quam error dolores animi voluptatem eligendi a.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Ad voluptatem ut odio quaerat.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Necessitatibus dolore enim voluptate sunt eum. Consequatur dolorum et laborum neque.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 22',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Modi sed voluptates voluptatem.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Illo quae quam reprehenderit ipsa et reprehenderit quisquam. Odio et minima voluptates rerum et corrupti dolores.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'red' },
              { type: 'workshop', title: 'Workshop 24', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Saepe voluptas minima aut est ea tempore.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Temporibus provident ullam fugit. Adipisci consequatur veniam. Et mollitia sed magnam ea.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 24',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Itaque quidem autem laudantium quas earum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Consequuntur amet et aspernatur consequatur rerum magni non ut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Recusandae vel qui officiis corrupti quasi dolorem officiis. Quia corrupti aliquid.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 25', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 25',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Laboriosam deserunt impedit rerum voluptatem quam. Aut veniam laudantium id sed doloribus aut possimus aliquid.',
            },
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 26',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Vel quos aut veritatis et. Quasi aut reiciendis aut excepturi. Voluptatum vitae voluptatem eos.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 27', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 27',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Vitae laborum id odio beatae laborum temporibus. Ea nesciunt inventore et aut sit id.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 28', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 28',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Cum mollitia omnis porro dolores.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Aut nisi et.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Debitis et voluptatem animi inventore. Quod ab non rerum.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 29', score: 'amber' },
              { type: 'workshop', title: 'Workshop 30', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 29',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Rem dolores maxime odit tempora assumenda.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ipsum eligendi et eum veritatis. Odio aliquam tempora voluptatem reiciendis distinctio error. Rerum aspernatur qui voluptatibus ipsam dolorum ut a id ut.',
            },
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 30', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 30',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Qui omnis labore at.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et modi sapiente est. Sunt iusto nihil maiores pariatur nobis eveniet voluptatem tempore. Reprehenderit similique voluptates est sed suscipit est. Quibusdam a sint.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 34', score: 'green' },
              { type: 'workshop', title: 'Workshop 35', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 34',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Quaerat delectus adipisci.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Quos iure eius amet.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Totam expedita vero illo impedit molestias aliquid expedita sint aut. Libero beatae error quia voluptatem ab alias. Aut unde non non non inventore similique quo dolor non. Ipsa molestiae aut esse voluptatem sit placeat dolor.',
            },
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 35', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 35',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Dolor minus distinctio deserunt.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Eum unde cupiditate.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sint minus et necessitatibus. Tempora illo necessitatibus non doloribus. Ad architecto alias.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'amber', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 36', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 36',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Quas amet maiores reprehenderit reprehenderit aut qui debitis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Omnis aut eius fuga debitis. Qui quidem optio. Quas ullam at et. Aut sit eum veniam eligendi eos doloribus magni id.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 37',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Laborum corrupti enim magnam blanditiis placeat eaque facere.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Recusandae non ex provident dolores ea. Cum consequatur porro quisquam atque eius. Dolorem nisi maxime nihil deserunt fugiat commodi quisquam illum.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 38',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Dicta tenetur praesentium fuga nostrum adipisci temporibus.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Doloribus vel perferendis quod incidunt blanditiis et ipsam. Ut provident sunt labore. Molestiae enim maxime harum laboriosam numquam non voluptatibus ut eius. Asperiores impedit fuga voluptates.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 40',
              score: '12/14',
              percentage: 86,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quia eligendi quis aut. Minima ut qui ut eveniet atque voluptatem aperiam rerum optio.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'red',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 41', score: 'red' },
              { type: 'workshop', title: 'Workshop 42', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 41',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Ipsam culpa doloribus impedit omnis similique.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Rem consequuntur nisi ut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et occaecati sed neque laudantium esse alias eum. Sit esse libero itaque doloremque sed accusantium. Sed sapiente veniam doloribus voluptatem aliquid sint cum. Est quo ex facere sed velit sequi.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Dicta quo corporis quisquam non officiis et dignissimos.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ea et totam magni autem. Dolor alias molestiae neque corporis nam.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 43', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 43',
              score: '11/13',
              percentage: 85,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et id mollitia qui. In sint distinctio ea voluptatem. Quia unde fuga necessitatibus et veniam eos ab dolores cumque. Consequatur eveniet et et ut veniam blanditiis saepe.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 44',
              score: '13/15',
              percentage: 87,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Repudiandae non ut eum dolores non sunt sunt natus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quis aut nihil est quo deleniti. Iure veniam dolores sequi velit molestiae. Reprehenderit optio ea et a quaerat quia rem id aut.',
            },
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 45', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 45',
              score: '12/14',
              percentage: 86,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Distinctio aut exercitationem pariatur nostrum. Amet aliquam voluptatem itaque et nisi occaecati cum vel deleniti. Sunt voluptate unde ratione est.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 46', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 46',
              score: '11/12',
              percentage: 92,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Ea eum exercitationem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Id in omnis quod ratione voluptatem molestiae non corporis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quidem est molestias sint aut. Minima ut ut maiores aperiam rem.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 47', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 47',
              score: '12/13',
              percentage: 93,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Consectetur et repudiandae rem est voluptatem facere et consectetur itaque.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Commodi tempore dolores enim voluptates minima voluptatum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sit qui maxime. Hic occaecati magnam laborum consequatur aut laborum in. Occaecati ut placeat reprehenderit quia laborum. Cupiditate expedita molestiae sunt.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 48', score: 'amber' },
              { type: 'workshop', title: 'Workshop 49', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 48',
              score: '12/13',
              percentage: 93,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Est cumque officia expedita sit dolor non.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Voluptatem nulla dolores soluta cupiditate porro repellat nam repellendus necessitatibus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Blanditiis quis labore enim eum et nisi. Recusandae dolorum reiciendis nisi.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 50',
              score: '11/12',
              percentage: 92,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Pariatur fugiat aut occaecati non.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Minima sed alias corporis et tenetur totam aliquam sunt ea.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Adipisci dignissimos deserunt esse commodi dolorem explicabo. Id ea iusto molestiae vel minima a qui quia pariatur. Est quia voluptatem non. Explicabo qui eligendi eius et.',
            },
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 51', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 51',
              score: '8/9',
              percentage: 89,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quia ut consectetur et nihil vitae deleniti iure ut aut. Id sit fugit et hic et distinctio aperiam temporibus. Rerum laboriosam ex impedit dolores sit ea occaecati perferendis.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 52', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 52',
              score: '8/9',
              percentage: 89,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Fugiat voluptatem quos illo.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rem consectetur quam quia autem esse nobis. Quasi aut non nemo eos doloremque est dignissimos error nam. Exercitationem consequatur et aut quas sunt odit quis debitis. Voluptas deleniti labore non enim nam.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 54', score: 'amber' },
              { type: 'workshop', title: 'Workshop 55', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 54',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Sit nisi in est sint.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Aspernatur libero est enim et.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nihil hic quae quis vel natus reprehenderit. Quia illum libero sint assumenda molestiae et perspiciatis. Consequatur natus ab laboriosam aut.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 55', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 55',
              score: '12/14',
              percentage: 86,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Molestias possimus nihil odio aut delectus esse eius voluptatem fugiat. Dolor eos occaecati laudantium corporis labore sequi adipisci eligendi.',
            },
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: true,
            recapTask: {
              title: 'Platform and cloud engineering',
              score: 'red',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 56', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 56',
              score: '8/9',
              percentage: 89,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Natus velit quisquam fuga ut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sed dolores voluptatem maiores aut atque. Sequi non suscipit sint ut adipisci asperiores. Ut facere qui fugit est fuga.',
            },
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 57', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 57',
              score: '8/9',
              percentage: 89,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Eos soluta nisi et et illo id ut repellat est.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Repellendus iusto qui expedita error blanditiis eos esse.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eum consequuntur dolores suscipit nobis dolorem. Provident sit aut id. Autem aut maiores earum. Earum et sit.',
            },
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 58',
              score: '10/12',
              percentage: 84,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Minima velit non atque ut culpa exercitationem debitis vero tenetur.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Id adipisci est impedit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptate sint voluptatibus eaque quis doloremque. Amet est ut voluptates aut quidem dolore et ducimus autem. Debitis dignissimos molestias fuga velit impedit voluptatem itaque reprehenderit necessitatibus.',
            },
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 59', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 59',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Alias doloremque quia quia maiores consequatur minus.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ducimus vero nesciunt voluptate consequatur. Est consectetur aliquid perspiciatis laudantium velit consequuntur mollitia commodi blanditiis.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 60', score: 'amber' },
              { type: 'workshop', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 60',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Id corrupti repellendus quae nam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Deserunt vel dolorum tenetur optio unde. Delectus nam sit quod debitis dolores earum blanditiis. Quibusdam eaque asperiores cum voluptas sit accusantium soluta et placeat. Rem expedita vero cum rerum et repellendus.',
            },
          },
        ],
      },
      {
        info: {
          id: 5,
          name: 'Dr. Sherman Altenwerth',
          username: 'Bernadette18',
          avatar: 'https://cdn.fakercloud.com/avatars/areus_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 1', score: 'amber' },
              { type: 'workshop', title: 'Workshop 2', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 1',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Laboriosam impedit saepe itaque veniam ut et impedit. Ullam earum ipsam.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 2', score: 'amber' },
              { type: 'workshop', title: 'Workshop 3', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 2',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Itaque amet eligendi veniam molestiae molestias illo incidunt et. Maxime aut velit.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 3', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 3',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Vero id dolorem. Quod vero sit vero perspiciatis non cupiditate facilis veritatis quisquam. Nostrum consequatur in expedita dolores qui quia. Ullam et sapiente ducimus.',
            },
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 4', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 4',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quam inventore quibusdam perspiciatis quisquam et sit. Tempora repellat nemo voluptatibus culpa id architecto autem. Expedita consequatur placeat cum autem. Consequatur facere quo quos illum ipsam.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 5', score: 'amber' },
              { type: 'workshop', title: 'Workshop 6', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 5',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Magni ea unde consequuntur sed iure blanditiis accusantium dolores dolorem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment: 'Aspernatur molestiae non.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eligendi et iure. Omnis consectetur amet quaerat praesentium. Aspernatur provident ratione.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: true,
            recapTask: { title: 'Advanced JS', score: 'red', type: 'recap' },
            workshops: [],
            quiz: {
              title: 'Quiz 6',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Cupiditate cumque esse accusantium incidunt.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Consequuntur excepturi adipisci maiores illum nemo nihil et corporis. Tenetur sapiente expedita vel provident sed. Labore saepe vel perferendis vero inventore nobis velit libero. Sint cumque dicta repellendus ullam provident alias excepturi qui saepe.',
            },
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 7',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Quam aut quae dignissimos officiis.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Debitis assumenda molestiae voluptatem saepe porro.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Non optio quaerat. Sint dolorem nisi. Deleniti sit necessitatibus sed.',
            },
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 8', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 8',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sunt fuga quo. Delectus saepe quia tenetur ut voluptatibus quo. Veniam cum iure aut qui distinctio.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 9', score: 'red' },
              { type: 'workshop', title: 'Workshop 10', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 9',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Numquam optio dignissimos rerum voluptatem itaque omnis sed. Inventore rerum voluptatum doloribus veniam accusamus suscipit eius ut.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 10', score: 'amber' },
              { type: 'workshop', title: 'Workshop 11', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 10',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Praesentium unde alias consequatur eos.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Optio nobis est id fuga ea consequatur alias.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia fugit consequatur ut minima assumenda ut in ullam quo. Non velit tempora quasi provident voluptates minus.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 11', score: 'amber' },
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 11',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Atque tempora quibusdam ipsa molestias error.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Et ut quod nihil perferendis fuga molestiae et tempore porro.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et nihil sit numquam. Sunt consequuntur mollitia. Sunt consequuntur quisquam ut temporibus reprehenderit accusantium. Voluptatem reprehenderit qui porro deserunt.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Velit earum aut ad eos.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Qui ut corporis ut magnam est odit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Occaecati et dolor repellendus cum. Omnis sequi aut praesentium eveniet esse.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 13', score: 'amber' },
              { type: 'workshop', title: 'Workshop 14', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 13',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Totam perferendis et est.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Animi eos dolore aperiam molestiae non cum adipisci veniam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quibusdam id consequuntur animi quas rerum. Laboriosam excepturi id odio reprehenderit rerum nihil minima ut perferendis. Perspiciatis perferendis explicabo sed veniam ipsa. Et dolor consequatur voluptates omnis sequi incidunt est cum aut.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 14',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Perspiciatis labore nulla et omnis rerum. Sit aliquam nemo quia ea.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 15', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 15',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Provident est dolorem et aut consequuntur quasi ut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ratione nulla id aut enim. Consequuntur facere voluptatum laboriosam ducimus. Sunt officiis voluptatum voluptatem blanditiis et inventore.',
            },
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: true,
            recapTask: {
              title: 'Databases and APIs',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 16', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 16',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Id totam molestias similique earum vitae ipsam doloribus quis iste. Iusto deserunt consequatur et quasi laudantium necessitatibus. Illo vel doloremque quas magni doloribus soluta et. Qui voluptates numquam aperiam et ut.',
            },
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 17',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sequi facere beatae ut est labore voluptatem ut. Aut at et vitae velit maiores officia ipsum nulla quibusdam. Architecto a similique est. Aut earum reprehenderit praesentium inventore.',
            },
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 18',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Nihil quam voluptate labore assumenda. Eaque reiciendis totam omnis qui laboriosam voluptatibus voluptatibus. Maiores molestiae rerum ut. Labore animi tenetur.',
            },
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 19', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 19',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment: 'Tempore et tempora sapiente ad.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Repudiandae aliquid iure atque. Fuga est possimus velit ipsa rerum. Quaerat quas rerum quia quia esse ab iure cumque mollitia.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 20', score: 'amber' },
              { type: 'workshop', title: 'Workshop 21', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 20',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Fugiat sit quibusdam nihil adipisci quasi qui quia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Distinctio nostrum reiciendis. Voluptatem eaque corrupti nulla molestias dolor consequatur molestiae excepturi aut. Soluta voluptas facilis fugiat et asperiores sint ipsam rerum.',
            },
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 21',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Quam voluptatem debitis id.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ut maxime sunt a quasi repudiandae assumenda. Sunt dolor id excepturi natus ipsum. Aliquid molestiae accusamus inventore voluptatum velit.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 22', score: 'amber' },
              { type: 'workshop', title: 'Workshop 23', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 22',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Non exercitationem inventore rem beatae occaecati cupiditate amet ex fugiat.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Amet quaerat minima possimus velit cum omnis ratione. Deleniti facere recusandae voluptas aut. Molestias et numquam aperiam nulla. Quidem ipsam beatae temporibus enim ut est.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'In blanditiis veritatis et nemo ullam inventore ut aut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nihil sequi exercitationem aliquid voluptatem consequatur. Iste impedit sunt voluptatem nihil suscipit tempore.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 24', score: 'amber' },
              { type: 'workshop', title: 'Workshop 25', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 24',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Eligendi sunt impedit.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment: 'Non nisi incidunt.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum voluptas maxime eius libero aut unde iure. Nemo quisquam amet expedita mollitia.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 27',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Quaerat voluptate et nam ut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ad suscipit quaerat voluptatem quam non. Rem commodi qui amet officia modi ut numquam sequi. Libero ex beatae perspiciatis dolorum maiores. Suscipit omnis corrupti accusamus facilis quaerat reiciendis.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 28',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Sed eum rem voluptates magnam asperiores molestiae.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia vitae tempore ex et tenetur maiores voluptate. Aspernatur eveniet quia. Enim cum et odio fugiat. Dolorem iure adipisci consequatur nulla consequatur et in non.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 29',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sint consequuntur quia molestiae quo non vitae ut. Ipsum nam modi dolorum ipsa et accusantium ut soluta adipisci. Aliquid molestiae repellendus facere aut aliquid consectetur aut velit quo.',
            },
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 30', score: 'green' },
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 30',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Rerum officia fuga velit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quibusdam nesciunt iusto eum consequuntur molestias aut voluptatem ut. Ut alias voluptate velit voluptas nesciunt quia. Optio et labore.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
              { type: 'workshop', title: 'Workshop 32', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 31',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Iste voluptatem earum. Ipsum dolorum quo nisi et consequatur numquam velit est provident. Occaecati aut quibusdam aut et non ullam.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 32', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 32',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Voluptas sit natus qui repellat totam accusantium ipsam culpa.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment: 'Quia et ea facilis sint veniam iusto et.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Velit consequatur perferendis sit quia assumenda et natus. Impedit doloremque et.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 33',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Vel velit voluptatem et corrupti quis praesentium at nisi. Voluptas sunt corrupti animi reprehenderit iste dicta voluptate necessitatibus. Incidunt dolor et rerum.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 34', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 34',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Deserunt possimus fuga sit maxime. Animi sit dolores quia explicabo consectetur repellat culpa voluptas.',
            },
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 35', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 35',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Asperiores hic cumque modi cumque in nostrum dolorem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sed accusantium facere in. Non nobis voluptatem vel ut eum veritatis corrupti deleniti. Tempora cupiditate nisi delectus doloribus sed rerum asperiores ullam ullam.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'red', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 36', score: 'amber' },
              { type: 'workshop', title: 'Workshop 37', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 36',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Ducimus officiis provident dicta beatae minus reiciendis dolor.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatibus ea voluptas nemo quia omnis dolores. Sed est et quod at ratione. Quis quaerat eius officiis ut non asperiores eos sequi optio. Dolores libero autem recusandae praesentium reiciendis.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 37', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 37',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Necessitatibus repellat quas. Voluptatem odit est voluptatibus velit.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 38', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 38',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Quia dignissimos asperiores nostrum sint sunt.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment:
                  'Autem officiis dolorum illo qui velit nisi et ea dolore.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sequi corrupti aut qui inventore magnam sed aperiam doloremque. Laborum dolor eos occaecati laborum. Architecto nemo debitis explicabo dolorem dolor esse non.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 39',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sint laboriosam vero et id vel. Consectetur provident blanditiis dolores ut autem voluptas.',
            },
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 40', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 40',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment:
                  'Rerum neque voluptate ut adipisci assumenda assumenda.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ratione et in totam sunt et. Ab at et rerum veniam voluptatem.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 41',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Quia quia vitae fuga esse eos vitae nostrum nulla nostrum.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quidem vel qui cupiditate ad. Ipsa sit quo inventore molestiae et minima laboriosam. Ullam incidunt repellat porro.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Fugit eveniet repellendus sit reprehenderit quas aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Repellat nihil tenetur voluptatem recusandae nisi neque. Omnis quasi eius doloribus. Qui aut harum quo.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 45', score: 'red' },
              { type: 'workshop', title: 'Workshop 46', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 45',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Autem hic nihil praesentium sint omnis.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem non molestias dolor ea esse. Dolores voluptatem aliquam ut aut possimus in est est. Soluta magnam consequuntur consequatur a optio. Nisi voluptas quia et sapiente.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 46',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Repellendus voluptatem perferendis non est qui.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment:
                  'Id commodi occaecati maxime dolorem cupiditate asperiores iusto veritatis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quae animi incidunt tempora suscipit ipsum nobis rem velit voluptatum. Itaque vel cumque laudantium excepturi aut optio rerum dolorem sed. Qui consequatur unde laborum inventore et.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 47', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 47',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Reprehenderit officia architecto deserunt voluptatum enim qui expedita.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia ratione dolorum earum iste repellendus dolorem corporis. Voluptatem repellat consequatur et qui qui nulla. Repudiandae quasi totam eos non vel. Ut natus et accusantium corporis.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 50', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 50',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content: 'Maiores sint non est. Enim nihil tenetur qui quia ea.',
            },
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 51',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Eius est minus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ab voluptas voluptatum. Quod illo consectetur at commodi molestias laboriosam.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 52', score: 'red' },
              { type: 'workshop', title: 'Workshop 53', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 52',
              score: '10/12',
              percentage: 84,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Inventore dolores voluptatum quia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Repellat ut et. Quia vel molestiae reiciendis et. Eaque aperiam fuga mollitia vitae enim voluptatem beatae nam quia. Dolore consectetur provident molestiae eius magnam incidunt libero eaque maxime.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 54', score: 'red' },
              { type: 'workshop', title: 'Workshop 55', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 54',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Ipsum iure quo excepturi sint.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Modi sint consequatur.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ipsa eius animi id et recusandae cum eius. Quas repudiandae culpa dolore aut unde dolor dolorem consequatur. Totam numquam nulla nihil eos eos error repellat amet non.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 59',
              score: '11/13',
              percentage: 85,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Quia aut ut rerum ea eveniet.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Qui perferendis magni et ipsam aut quos sit illo. Non odio esse aliquam sed excepturi id.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 60', score: 'green' },
              { type: 'workshop', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 60',
              score: '11/13',
              percentage: 85,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Id mollitia velit eius aliquid.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Adipisci omnis voluptatum error earum quae autem omnis ad temporibus. Et quod amet voluptatem.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Bootcamp2',
    region: 'East Midlands',
    startDate: '2021-05-26',
    students: [
      {
        info: {
          id: 6,
          name: 'Calvin Conroy',
          username: 'Wanda31',
          avatar: 'https://cdn.fakercloud.com/avatars/croakx_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 1', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 1',
              score: '6/12',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Veritatis et culpa deleniti.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Earum consequatur est praesentium accusantium reprehenderit et. Eum laudantium illo accusantium reprehenderit est laborum. Nisi voluptate culpa minima. Velit eos eum.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 2', score: 'red' },
              { type: 'workshop', title: 'Workshop 3', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 2',
              score: '5/10',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Commodi ut non illo harum aut vel.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vel dolor nesciunt eius aliquid rerum repellendus. Voluptatem dolores dolore. Necessitatibus aut eius autem et.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 3', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 3',
              score: '4/8',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Praesentium pariatur adipisci.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nulla quis libero sapiente. Quo suscipit sed vero et molestias et est voluptate eum. Dolor totam nostrum ipsum.',
            },
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 4', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 4',
              score: '6/12',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Reiciendis error deserunt.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nisi inventore quaerat consectetur id. Praesentium nesciunt eligendi quia.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 5', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 5',
              score: '7/15',
              percentage: 47,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Nisi dicta veniam dolore.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptates eum dolores cupiditate fugit. Aut ut minima. Aspernatur id blanditiis aut reiciendis consequatur. Quia vitae molestiae fugiat corporis.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: true,
            recapTask: { title: 'Advanced JS', score: 'amber', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 6', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 6',
              score: '5/11',
              percentage: 46,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Possimus voluptatem quas officia.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Porro voluptatem perspiciatis libero sint voluptas sit et. Voluptatem non sit et quia deleniti ab.',
            },
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 8',
              score: '6/14',
              percentage: 43,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Corporis dolorum ipsam quae corporis quae.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Quod impedit quis rerum tempore temporibus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'A fugiat molestiae qui aut voluptatem. Illo eos consectetur nihil laborum nihil cupiditate. Autem aut amet ut ad.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 9', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 9',
              score: '4/9',
              percentage: 45,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Veritatis at consequuntur vitae eos at voluptatibus tenetur molestias rerum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Doloremque hic aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Placeat natus quia. Non voluptatem earum et perspiciatis repellat quia perferendis non. Dolore odit eligendi adipisci.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 10', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 10',
              score: '5/11',
              percentage: 46,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Non repellendus ullam illo quisquam sed ea.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Consequatur aut quis fuga est sunt. Ipsam molestiae tenetur. In ad harum incidunt voluptatum exercitationem facilis.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 11', score: 'red' },
              { type: 'workshop', title: 'Workshop 12', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 11',
              score: '6/12',
              percentage: 50,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Nihil sapiente odit ea aliquam dolores laboriosam.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'In similique veniam vitae a necessitatibus atque accusantium.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Enim sequi debitis et nam. Aut placeat suscipit sequi deserunt unde voluptate eos. Voluptatem harum similique aliquam omnis vero vitae maiores soluta qui.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
              { type: 'workshop', title: 'Workshop 13', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '6/11',
              percentage: 55,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Et eligendi et reiciendis exercitationem.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Debitis est officia. Architecto vitae ut. Dolorum numquam optio quia amet vel.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 13', score: 'amber' },
              { type: 'workshop', title: 'Workshop 14', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 13',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Eos facere officia unde eaque inventore necessitatibus.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Aliquam cupiditate qui repellat nihil enim repudiandae.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Modi voluptatibus eaque molestiae ut qui dolores. Accusamus occaecati quia eum. Et quaerat aut quasi voluptatum ut harum velit ipsa.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 14', score: 'amber' },
              { type: 'workshop', title: 'Workshop 15', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 14',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Accusantium possimus aspernatur iure consequatur doloremque aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Enim dolores et facere similique consectetur repudiandae mollitia enim. Omnis tempore itaque porro quis molestias repellat laboriosam. Reiciendis quam qui.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: true,
            recapTask: {
              title: 'Databases and APIs',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 16', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 16',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Vel nesciunt nostrum nihil dolores et ducimus. Facere qui iure inventore.',
            },
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 17',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Numquam perspiciatis asperiores optio voluptatibus. Doloremque sequi numquam odio voluptates provident quibusdam. Molestias eum id et et.',
            },
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 19',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Incidunt veniam quia reiciendis voluptatem quas consequatur sint maxime. Aspernatur nostrum et. Recusandae aperiam dicta nesciunt commodi. Sit incidunt et tempora molestias distinctio similique aut minus aut.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 20',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Doloribus quibusdam voluptatem dignissimos quo eaque.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dignissimos sequi sint aut ipsum eaque at dolore sit. Doloremque voluptatem aut dolorum dolorem consequatur. Et rerum voluptates enim delectus eligendi accusamus enim consequatur. Non assumenda et quaerat doloremque dolorum laudantium nihil.',
            },
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 21',
              score: '5/8',
              percentage: 63,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Voluptatem fugiat id possimus facilis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et corrupti enim. Aliquam quas eveniet quisquam natus nam sunt est culpa. Aut in est fuga nihil. Ut quo occaecati dignissimos accusamus error quod quis.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 22', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 22',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Magni nam et harum ullam alias.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aperiam nam sed asperiores voluptas. Dolore et recusandae. Qui voluptates ducimus vero nostrum. Laudantium enim mollitia id aut in.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 23',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Amet esse enim.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Harum vel voluptas qui et vero voluptas qui ipsam perferendis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Accusantium nihil neque non quia ut laudantium amet. Molestias recusandae in qui et ratione dolor et qui labore.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 24',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et et nostrum culpa neque dolor magnam culpa distinctio. Ullam qui at maiores tenetur ut.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 25',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Beatae commodi ab rerum officia architecto aut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Est consequatur labore qui. Sit et consectetur. In ad soluta.',
            },
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 27',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Rem sunt ex maxime deleniti maiores. Qui veniam ut eius accusamus maiores architecto et maiores. Veritatis sequi est veniam maxime doloremque hic molestias quos.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 28',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Ut officia ut. Ut atque assumenda quos consequatur error sint et sit nulla.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 29', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 29',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Perspiciatis ex consectetur reprehenderit enim velit autem fugit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Mollitia qui quia aut nulla tenetur ad eos dolores illo. Veritatis qui illo velit eligendi. Nostrum impedit quidem fugiat aut ad hic.',
            },
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 30', score: 'green' },
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 30',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Consectetur placeat repellendus ut maiores omnis rem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Magni molestiae quos eius.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Occaecati soluta qui minus ut ea. Quibusdam ex rerum quis ut est quas dolorem et molestiae. Rerum aut quisquam molestias aut aperiam eos. Quam ab veniam hic dignissimos laboriosam aliquam sunt.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 31',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Vel beatae consequatur molestias iure repudiandae ex impedit et et.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nulla culpa voluptas sed voluptatem est quae. Dolor velit quisquam laborum in. Voluptatibus est nihil voluptatem ut ut fugit et.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 32', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 32',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Porro aut occaecati dicta et dolorum non. Ipsa labore consequatur aperiam non modi voluptas eum.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 33', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 33',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Ratione quo quod eaque quas.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Et dolorum enim.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Molestiae minima eos praesentium vitae et sunt doloribus dolores. Totam sapiente tempore in mollitia blanditiis rerum omnis amet tempore. Pariatur inventore fuga quia architecto laudantium aliquam perferendis.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 35', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 35',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Est dolorem dolorum optio dignissimos blanditiis neque aliquam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nisi ex a vero iste et libero esse id. Animi praesentium quo autem sequi vitae temporibus voluptates.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'red', type: 'recap' },
            workshops: [],
            quiz: {
              title: 'Quiz 36',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sit atque eligendi dicta consequatur. Sint dignissimos deleniti.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 37', score: 'amber' },
              { type: 'workshop', title: 'Workshop 38', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 37',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Placeat eos suscipit et modi est.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem aut assumenda eveniet possimus est non commodi qui dolorum. Corporis iusto eum illo et velit minima. Asperiores est delectus soluta ex fuga exercitationem aut sequi porro. Impedit ut ipsa corrupti praesentium qui dolorum.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 38', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 38',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Enim aut id enim consequatur fugiat aut iusto consequatur. Quia doloribus voluptatibus quis enim optio non ut voluptatem.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 39', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 39',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Et nihil quasi perferendis sint voluptatem voluptas non eius.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Excepturi aliquam a consequatur ab et expedita.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Fuga debitis qui quos corrupti ipsam quisquam. Qui dolor veniam ut dolores dolores eos sit adipisci. Soluta voluptatibus aut et omnis repudiandae sunt laudantium.',
            },
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 40',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Quia sint veritatis blanditiis tempore veniam expedita.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Fuga et dolores voluptatum dignissimos aut molestiae est est. Quae nihil aut voluptatum molestiae vitae rerum id.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'red',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 41',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Maxime distinctio et sed.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolore magni voluptas necessitatibus corporis quia beatae. In qui quas in dolorum.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 43',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Et ut sunt similique vel autem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Non vitae corrupti laborum veritatis soluta. Officiis veritatis sunt nulla laudantium expedita sit distinctio. Iure aliquam et odio qui doloremque doloribus. Libero unde et.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 44', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 44',
              score: '7/11',
              percentage: 64,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Ea nulla hic quo natus perspiciatis cupiditate molestiae qui omnis.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Culpa quod error.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Similique consequuntur qui exercitationem qui. Est quos assumenda sed a enim optio recusandae. Minima laboriosam deleniti. Quaerat voluptatem sequi ut.',
            },
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 46',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Voluptate omnis eaque. Possimus ab doloremque nihil laboriosam mollitia exercitationem eum iure. Fugiat mollitia ut dolore. Nisi similique quis voluptatem.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 47',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Tempora nulla natus perspiciatis.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Porro sunt et enim nesciunt officia possimus et magni. Quae expedita qui.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 48', score: 'amber' },
              { type: 'workshop', title: 'Workshop 49', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 48',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quos ab placeat tenetur aspernatur est. Sit aut soluta totam optio iste temporibus eum nihil. Dolorem minus velit nam inventore non.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 49',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Mollitia fugit vel maiores impedit et voluptatem laboriosam earum pariatur.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolore odit non provident nihil explicabo dolorum autem distinctio mollitia. Eligendi tempora necessitatibus recusandae.',
            },
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'red',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 51',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Dignissimos nemo adipisci.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vel porro quasi quae ipsam ducimus ipsam ea. Est earum excepturi iste reiciendis aperiam odit porro inventore.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 52', score: 'amber' },
              { type: 'workshop', title: 'Workshop 53', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 52',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Sunt fugit aut laborum dolore iste dicta laboriosam numquam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Reiciendis atque voluptatem ab quae. Accusantium eligendi qui nobis reiciendis repellendus praesentium perspiciatis. Reprehenderit ducimus ipsum dignissimos similique reprehenderit necessitatibus.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 55', score: 'amber' },
              { type: 'workshop', title: 'Workshop 56', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 55',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Occaecati sed molestiae voluptas a voluptatem autem eum voluptas magni.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum enim aut eligendi officia sunt. Laborum est dolorem consequatur est id corrupti esse. Perferendis voluptate ipsam iusto facilis ipsum possimus id. Fugiat et in repellat.',
            },
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: true,
            recapTask: {
              title: 'Platform and cloud engineering',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 56',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Est repellat aut consequatur et iste numquam. Rerum inventore voluptatem occaecati. Est consectetur ea ut maxime incidunt molestiae libero perferendis.',
            },
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 57', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 57',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Est ad aut aspernatur sunt est voluptates aspernatur voluptatem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Eos ducimus corporis provident voluptatem et.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Minima quis ut et et pariatur et ut ratione nemo. Fugiat necessitatibus vel mollitia ea aut accusantium maiores. Ex placeat vero.',
            },
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 59', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 59',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et id aut dicta modi. Et at iste doloribus est eos placeat velit voluptatem aspernatur. In alias aut quo voluptates. Rerum vero iste quasi qui placeat hic ipsa velit.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 60', score: 'red' },
              { type: 'workshop', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 60',
              score: '12/15',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Aut quia ut magnam architecto velit dolores amet itaque aut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Asperiores quia natus rerum officia. Dolore unde assumenda sed et. Consectetur sint reiciendis.',
            },
          },
        ],
      },
      {
        info: {
          id: 7,
          name: 'Judy Auer',
          username: 'Furman.Ryan',
          avatar: 'https://cdn.fakercloud.com/avatars/ariffsetiawan_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 1', score: 'amber' },
              { type: 'workshop', title: 'Workshop 2', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 1',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Amet amet enim ipsa dolor explicabo harum ab.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Nam et qui rerum ullam est ut odit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Beatae voluptatem temporibus eos maiores consequatur debitis natus. Nihil placeat voluptates et illo ut unde velit. Accusamus consectetur excepturi numquam ut culpa ex.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 2', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 2',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment: 'Et rerum ratione sunt enim et.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et vel id et sequi provident alias. Mollitia quisquam ipsum consequatur provident qui repellat sit. Laboriosam non voluptatem beatae commodi doloremque labore.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 3', score: 'amber' },
              { type: 'workshop', title: 'Workshop 4', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 3',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Eum et dolores repellendus consectetur. Dolorem officia officia magnam perspiciatis necessitatibus ea est repudiandae. Quae ut non sit.',
            },
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 4',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Praesentium reiciendis accusantium rem rerum sint quo quas qui consectetur.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment: 'Perspiciatis impedit qui aut explicabo.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nemo aliquam necessitatibus aut. Quis inventore nostrum consequatur reiciendis vel repellendus magnam.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 5', score: 'red' },
              { type: 'workshop', title: 'Workshop 6', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 5',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Tenetur non repellendus alias a culpa.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aut iure ut repellat nemo sapiente molestiae voluptatem error. Et possimus dignissimos ut sit quia. Sunt reprehenderit molestias exercitationem provident.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: true,
            recapTask: { title: 'Advanced JS', score: 'amber', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 6', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 6',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Sed et aut assumenda harum voluptatem ullam minus sit at.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content: 'Aliquam tenetur nulla. Et beatae veniam et id.',
            },
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 8', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 8',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Eligendi sed est aliquid aliquam molestiae nesciunt.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Magni accusamus nemo eveniet excepturi iure quia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Autem libero accusamus quas voluptas est quia quae doloribus. Officiis magnam fugit labore qui. Accusamus officia voluptas necessitatibus et laboriosam.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 9', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 9',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Consequuntur eos exercitationem esse praesentium.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Voluptas expedita assumenda corporis porro.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Modi ad repellat voluptate debitis. Sed eum incidunt. Sunt est eum.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 10', score: 'green' },
              { type: 'workshop', title: 'Workshop 11', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 10',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Cupiditate eos non et et qui itaque autem fuga vitae.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Consequuntur blanditiis sequi dolores.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolorem possimus rerum incidunt earum quibusdam eaque accusamus ullam. Sunt quia enim velit laboriosam asperiores. Et nostrum eligendi. Culpa nostrum officiis culpa quis eos cumque.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 11', score: 'green' },
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 11',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Nisi nihil quas non iure minus esse. Sint eum eum quod modi incidunt corporis dolorem illum.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Totam sit in corporis.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Molestiae quae expedita qui tenetur. Doloremque harum ut natus eligendi nihil et minima rem. Error enim dolore nam maxime.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 14', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 14',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Id est dolore consequatur autem odit dolore aut dolorem. In vel a repudiandae optio odio.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 21', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 21',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Voluptatem blanditiis est ex fugit.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Laboriosam totam est.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Eius qui nihil. Error dolore enim.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 22', score: 'amber' },
              { type: 'workshop', title: 'Workshop 23', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 22',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sed velit quibusdam iure ut temporibus corrupti accusantium magnam. Laboriosam repellat voluptas dolorem voluptatem unde ea quas. Qui voluptas iusto quia voluptatem.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 24', score: 'amber' },
              { type: 'workshop', title: 'Workshop 25', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 24',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Hic sint cum eum sit animi in temporibus suscipit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Accusantium dolorum iste unde facere est. Sapiente sint tenetur modi velit doloribus. Quam omnis omnis consequatur provident at rem eaque commodi quos.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'red',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 26', score: 'red' },
              { type: 'workshop', title: 'Workshop 27', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 26',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Blanditiis in autem iure voluptatem voluptatibus qui ipsum.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Deleniti quasi culpa ut veniam qui ut aut facilis distinctio. Voluptate ex excepturi et quis aliquam facere aut. Ab iste aut consequatur inventore sint voluptatibus assumenda praesentium fugiat.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 27',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Expedita voluptatibus sed aspernatur. Incidunt eaque voluptatum unde enim dolores explicabo. Optio id blanditiis sed.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 28', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 28',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Nihil quidem consequatur est ea aut enim adipisci.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nihil tempore omnis molestiae saepe nostrum placeat soluta. Ipsum minus omnis repellat eum ad facilis.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 29', score: 'red' },
              { type: 'workshop', title: 'Workshop 30', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 29',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Delectus vel rerum inventore quas iure reiciendis expedita. Aut est culpa earum animi qui non quia.',
            },
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 30', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 30',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Sit delectus neque ut suscipit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ad nam voluptatem. Eveniet occaecati et. Labore officiis quia cum porro ab quas vero non.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
              { type: 'workshop', title: 'Workshop 32', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 31',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Enim et maiores.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ut architecto nisi esse et quia velit est quod. Ut nesciunt dolorum ipsam est laborum placeat.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 33', score: 'green' },
              { type: 'workshop', title: 'Workshop 34', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 33',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Explicabo nemo dolore blanditiis.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolores dolore suscipit fugiat. Vitae aut voluptatum. Voluptate aut alias voluptatem. Accusantium laudantium omnis doloribus porro sed ipsam.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 34',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'A incidunt pariatur.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Expedita eum eum consequatur cupiditate odio minima harum totam corporis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aperiam tempore veniam quis velit enim labore maxime neque provident. Nemo et consequatur odio beatae eaque laboriosam blanditiis est cumque. Dignissimos error deleniti eius explicabo minima illo.',
            },
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 35', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 35',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Id sed aut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vel numquam debitis sed ut autem. Illo qui quod maxime vitae qui ut recusandae expedita commodi. Ut perferendis autem rerum non quas hic animi ut repellendus. Sequi sit rem sit laboriosam.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'amber', type: 'recap' },
            workshops: [],
            quiz: {
              title: 'Quiz 36',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Officia voluptatibus sapiente sapiente consequatur quo vitae quibusdam et.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Doloribus omnis ipsa nulla aut consequatur eveniet tempore ab. Eum et quo et et numquam. Dolorem sed et et ea voluptatem ipsum.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 37',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Esse ratione perferendis laudantium dignissimos iste deleniti nesciunt in.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Placeat quaerat quasi explicabo. Quia omnis molestias aut laborum dolorem cupiditate maiores in. Est nesciunt ut non. Eos eum eligendi velit excepturi et accusamus ea non.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 38',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Eveniet nostrum iste.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Corporis id similique voluptas praesentium dolorum et. Ducimus voluptas iure provident quis qui. Nam officia illum veniam molestiae.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 39', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 39',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Ea impedit incidunt excepturi iste odit assumenda earum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Vel qui quaerat et enim nisi voluptate sit est.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Neque hic non dolore. Assumenda modi illum dignissimos ut nostrum voluptatem expedita eum. Quae blanditiis laboriosam vel consectetur dolores placeat aut distinctio ut.',
            },
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 40',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Non aut voluptatem eligendi voluptatem eos nostrum qui sint. Non aut nostrum amet quam ab et dignissimos aut. Expedita occaecati perferendis atque.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 41', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 41',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Enim provident totam.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et pariatur cupiditate id maxime labore enim quod. Iste minima voluptatem tempora ipsa tenetur quae.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment: 'Quo sint accusantium.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolor aperiam sapiente dolores commodi. Est ut quisquam sed eum omnis in vel. Facilis eveniet et et quae incidunt ut consequatur necessitatibus. Harum debitis ad.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 43', score: 'amber' },
              { type: 'workshop', title: 'Workshop 44', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 43',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Facere ducimus inventore a nisi quis autem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Optio inventore maxime laudantium dolores dolor et explicabo totam. Sed consequuntur sed quas consectetur maiores atque minus vel dolore. Reprehenderit rerum esse.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 44', score: 'green' },
              { type: 'workshop', title: 'Workshop 45', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 44',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Eum maiores animi beatae neque voluptas ipsam est ex animi.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Autem quia in natus quisquam excepturi cupiditate hic deserunt. Ducimus esse facere ipsam qui sed.',
            },
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 45', score: 'amber' },
              { type: 'workshop', title: 'Workshop 46', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 45',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'A laborum dolores aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Maiores est eligendi nam distinctio. Et in cum veritatis sed. Amet quia nulla dolores nesciunt quasi quos eum.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 46', score: 'green' },
              { type: 'workshop', title: 'Workshop 47', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 46',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Provident voluptatibus ea totam ipsa.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum nulla tenetur nisi modi dolores animi. Qui mollitia vero sunt cupiditate cum et harum ipsa.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 47', score: 'amber' },
              { type: 'workshop', title: 'Workshop 48', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 47',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 4,
                comment:
                  'Natus dolores totam doloremque sequi fugiat quidem quisquam.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content: 'Nulla sit ducimus. Sit debitis vero.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 48',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Magnam non magni aut dolorum eveniet ex dolore ad voluptatem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Libero quia laudantium.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Iure quos blanditiis aliquam ullam blanditiis ut. Reprehenderit cumque commodi. Tenetur minus voluptatem possimus quaerat blanditiis ullam veniam et perspiciatis. Dolores eveniet qui dolor.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 49', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 49',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Enim magnam eius adipisci.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Explicabo quia voluptatem veritatis doloremque iure rerum dolores quia eligendi. Quibusdam est quibusdam. Amet iste a incidunt amet ducimus et sed.',
            },
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 50',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Vel consequatur doloremque soluta omnis eum nihil nobis repudiandae neque.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Dolorem in nobis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Ut alias qui et repellat natus. Quia rem veniam sunt.',
            },
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 51', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 51',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Quibusdam pariatur tempora deserunt qui fuga.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 4,
                comment: 'Fugit unde dolor.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatibus magnam dolores deleniti nihil ipsam soluta impedit incidunt. Nihil rerum aut voluptatem et ut. Corrupti nulla dolor totam velit voluptatem.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 52',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Nihil in molestiae rerum hic voluptatem omnis est tempore non.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Alias minima molestias natus sed doloribus magnam eos. Minima animi sed quaerat animi. Maiores ipsum ut at sunt dolores culpa aut. Vel minus nisi vero culpa aliquam aliquid.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 53',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Libero mollitia pariatur distinctio doloremque est perferendis unde impedit. Modi voluptatem quos quod nemo dolorem voluptatem. Est nostrum ut modi labore vel.',
            },
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 54', score: 'amber' },
              { type: 'workshop', title: 'Workshop 55', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 54',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Vel optio sint enim voluptatum dolorem vel.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum commodi nihil iure autem quisquam ut praesentium. Qui rerum qui sed perspiciatis error est. Quasi et sit. Ad eos a.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 58', score: 'amber' },
              { type: 'workshop', title: 'Workshop 59', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 58',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Accusantium occaecati cupiditate et architecto voluptatibus ut. Maxime qui et libero et occaecati voluptas tempora dolor.',
            },
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 59', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 59',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Nihil aut voluptatum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Consequatur aut eum magnam cupiditate at dolorem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Dolorem voluptatum id et asperiores quaerat quaerat et ad et. Sunt et culpa voluptatem distinctio fugit expedita rerum. Ipsum itaque perferendis eveniet possimus quia ut magni nostrum. Iusto consequatur voluptas culpa veniam est qui est.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 60',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Asperiores fugit qui. Nulla laborum laboriosam rem aut ut reiciendis quam voluptatum non. Animi ex voluptatem nesciunt.',
            },
          },
        ],
      },
      {
        info: {
          id: 8,
          name: 'Melinda Jast I',
          username: 'Dock91',
          avatar: 'https://cdn.fakercloud.com/avatars/langate_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 1', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 1',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Laboriosam quo magnam at quia quia.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Illo modi aut harum similique quo. Aut molestiae eveniet. Error nisi eaque ab ut enim et. Dolorum rem velit modi ad assumenda ut nulla porro aut.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 2',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Omnis dolores sit illo temporibus aspernatur.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aliquam maxime assumenda. Architecto natus officiis. Consequatur reiciendis consequatur. Labore ratione enim recusandae a.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 3',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et voluptatem error quis sunt ex et iusto sit voluptatibus. Consequatur optio et est qui.',
            },
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 4', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 4',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Soluta omnis excepturi.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sunt reiciendis dolor. Ut aut eum ullam. Sapiente nesciunt impedit voluptatem id culpa quia laborum harum.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 5',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Qui ullam necessitatibus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Autem aperiam dolores. Accusantium sint sit optio eos quas enim omnis. Autem omnis sunt quidem eum repudiandae molestiae enim eos. Qui sunt nesciunt eum beatae sunt id reprehenderit dolor molestiae.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 7',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Enim recusandae cupiditate eum vel et id autem similique.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ea provident alias voluptatibus quam et ut voluptas. Et in repellat. Omnis rerum voluptatem.',
            },
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 8',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Id praesentium totam qui sit odit hic.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nemo qui et nihil blanditiis. Aut culpa expedita. Molestiae voluptas in dolores quo.',
            },
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 9', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 9',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Id rerum quod explicabo et est ut odio ut.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Illum excepturi culpa corrupti in. Nam consequuntur sint deserunt incidunt. Corporis doloribus cupiditate. Aut autem repellat.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 10',
              score: '12/15',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Consequuntur facilis qui vel est esse.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ad sunt voluptatem. Voluptas non quam. Odit aut eligendi asperiores corporis.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 11', score: 'green' },
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 11',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Eligendi dolor eum est. Sint incidunt dolorem accusamus at ea ratione repudiandae est. Et autem cupiditate nostrum veniam unde ad et. Odit odit doloribus aperiam magnam blanditiis perferendis eum.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 13', score: 'amber' },
              { type: 'workshop', title: 'Workshop 14', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 13',
              score: '12/15',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Quaerat velit eaque cumque dicta voluptatum ea vero.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et ipsam quia illum perspiciatis illum voluptates voluptas excepturi. Maiores facere doloremque assumenda ea nesciunt porro. Doloribus doloribus tempore nesciunt voluptatem optio. Est eos pariatur quo quis.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 15', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 15',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Illo voluptas dolorem animi consectetur qui illo eum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ullam qui perspiciatis architecto error aliquid enim nostrum. Quo consectetur enim ea modi tempora unde. Dicta eveniet ipsum. Et quo qui at eligendi.',
            },
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 17', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 17',
              score: '10/12',
              percentage: 84,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Et illum pariatur aut aliquam expedita dignissimos.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Temporibus consequatur fugit dolore non rerum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Est id assumenda est voluptate. Eveniet qui id ab repudiandae suscipit sint quis minima. Quis inventore et et cum ut nostrum dignissimos atque eligendi. Dolor quia eum nostrum est enim nihil.',
            },
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 19', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 19',
              score: '10/11',
              percentage: 91,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Omnis quod aut voluptatum amet fugiat sunt perspiciatis animi deleniti.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quibusdam id ut dolor sed beatae et iure. Maiores reprehenderit dolorum et accusamus sed odit consequatur.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 20', score: 'amber' },
              { type: 'workshop', title: 'Workshop 21', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 20',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sit id et aut laborum adipisci dolorum molestiae autem. Quos deserunt aut. Non qui officiis nulla eos sed eos asperiores. Ab mollitia debitis et rerum.',
            },
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 21',
              score: '12/14',
              percentage: 86,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem fuga illo omnis itaque quia. Vero autem laboriosam nam corrupti. Et voluptates vero et occaecati et similique.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 22',
              score: '11/13',
              percentage: 85,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Est quaerat molestiae ut omnis pariatur est explicabo voluptatem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Distinctio aspernatur voluptatem rerum magni et placeat exercitationem in. Quia qui rem est fugiat sed soluta.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'green' },
              { type: 'workshop', title: 'Workshop 24', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '8/9',
              percentage: 89,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Velit quo debitis earum voluptatum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Facilis non a deserunt et minima debitis eveniet asperiores ut. Consequatur qui nulla deserunt dolor molestiae ut est consequatur. Enim est error vel aliquid nisi et. Hic ab unde iste et quaerat.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'red',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 26',
              score: '10/12',
              percentage: 84,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quo incidunt consequuntur reiciendis similique expedita error. Blanditiis accusamus tempora eaque natus velit sed qui ullam. Qui sed explicabo voluptas. Optio sint sit blanditiis.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 27',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Reiciendis totam in vel molestias reprehenderit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptas error dolores dolor autem velit voluptatibus omnis error. Ut saepe est autem nesciunt ut et ipsum laboriosam.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 29', score: 'red' },
              { type: 'workshop', title: 'Workshop 30', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 29',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Adipisci illum sed commodi pariatur consequatur quidem occaecati saepe.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aut voluptates dolores officia velit unde veritatis. Quis nulla iste pariatur nemo. Voluptate ut et explicabo architecto ut voluptatum neque.',
            },
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 30', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 30',
              score: '11/13',
              percentage: 85,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quis quaerat illum iure. Incidunt nemo et dolorem ut nobis accusamus facilis temporibus officiis.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 31',
              score: '10/12',
              percentage: 84,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Fuga cupiditate quidem minima fugiat.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptates harum consequatur aliquam illo placeat. Ipsam dolores nisi. Qui vel est possimus accusamus eligendi libero beatae aut ut. Quo error similique nemo dicta.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 32', score: 'amber' },
              { type: 'workshop', title: 'Workshop 33', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 32',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Vel unde tenetur voluptatem non sunt animi ex omnis.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Magnam earum voluptatum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et blanditiis vitae iste numquam dolor optio. Maxime praesentium sapiente minima inventore dolor reprehenderit illo. Fugiat officia quia corporis id ducimus aliquam nisi hic.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 33',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Incidunt consequuntur laborum molestiae qui dolores id enim. Molestiae consequuntur ducimus nisi in aperiam dolor. Ex assumenda tempore quasi delectus possimus aut esse. Animi aperiam necessitatibus.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 34',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Sit fuga voluptatem necessitatibus laudantium ut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eaque deserunt sit similique labore nobis vel ut. Enim vel expedita quia error saepe ullam voluptatibus consectetur sed. Est sint quo. Vitae soluta praesentium ullam aut.',
            },
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 35',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Autem ut voluptas voluptas.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Atque aut quos est. Nostrum quod amet consequatur aut maxime ad. Quibusdam placeat libero cum molestiae eum pariatur odit deleniti labore. Accusamus blanditiis sunt eos aut rerum ut excepturi.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'red', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 36', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 36',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Harum in eaque vitae tenetur aliquam modi enim quas.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Praesentium qui quae nostrum nam reprehenderit ad.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Corrupti eaque enim est libero odit ut. Tempore similique est repellendus.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 39', score: 'green' },
              { type: 'workshop', title: 'Workshop 40', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 39',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Et hic minus dicta ad ullam blanditiis magni iste sunt.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Doloremque voluptas illum voluptatibus et nam. Aut sed sequi. Asperiores voluptatem totam consequatur cumque omnis doloremque. Nesciunt porro dolorum sit a quos illum est dicta.',
            },
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 40',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Veritatis sint omnis natus dolore dolor.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Debitis ipsum autem quasi. Necessitatibus culpa quia et fugiat. Quia iste vitae beatae deserunt minus et sint.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 41', score: 'amber' },
              { type: 'workshop', title: 'Workshop 42', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 41',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Omnis maiores atque et aperiam nobis ad. Saepe voluptas incidunt qui ut dolorum vitae. Aut aliquam et.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'amber' },
              { type: 'workshop', title: 'Workshop 43', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Excepturi nostrum voluptas. Aliquam dolores tempora magni qui. Ut ut occaecati quas id.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 43', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 43',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Quo beatae deserunt ut expedita omnis non voluptatem.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Qui et non fugiat velit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatum id accusantium nam maiores eaque. Aut quis omnis ratione quo. Cumque corrupti ipsum incidunt. Rerum voluptate expedita ratione distinctio debitis distinctio ipsum qui at.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 44', score: 'green' },
              { type: 'workshop', title: 'Workshop 45', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 44',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Impedit temporibus ipsam dolor qui nihil odio.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nihil itaque cum quo aut eos placeat maxime laborum in. Consequatur dignissimos cumque minima ipsam dolor. Voluptas natus iure suscipit ea rerum quia enim. Impedit libero et molestiae esse et sed voluptatem inventore dolore.',
            },
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 45',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Veniam et enim. Totam saepe modi sit ut autem. Quo vitae voluptatem accusantium nihil rem iure doloremque eum.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 46', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 46',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Explicabo perspiciatis id quo velit maxime.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Non sit nulla nobis ratione ea et qui id. Nostrum consequatur iure voluptatum sed vitae sapiente rem iusto.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 47', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 47',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Optio ea deleniti sunt quisquam eius velit libero.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Voluptas reprehenderit numquam odio dolor.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Qui aut pariatur animi iure voluptates fugit in. Ut qui quis consequatur natus ab fuga dolorem. Adipisci quidem nisi praesentium labore magnam commodi voluptatum. Autem quia debitis natus ex voluptate voluptas ut maiores aut.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 48', score: 'amber' },
              { type: 'workshop', title: 'Workshop 49', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 48',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Cum reiciendis eos veniam sunt. Fugit illo alias rerum perferendis qui ut repellat hic. Eligendi quia amet cumque at laborum aspernatur expedita qui. Enim qui neque.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 49',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et non adipisci aut distinctio eius distinctio. Qui consequatur non voluptatibus delectus eligendi ex recusandae consectetur. Omnis iure perspiciatis sed deleniti magni.',
            },
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 50', score: 'amber' },
              { type: 'workshop', title: 'Workshop 51', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 50',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Eos minus ipsa.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Fugiat dolores est possimus dolores. Optio maxime aut distinctio et nisi cumque cupiditate quo ut. Perferendis quia laudantium a laboriosam. Ipsa facere qui laborum nostrum accusantium qui.',
            },
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 51',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Doloribus distinctio quis rerum.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Iure quam voluptas at. Rerum sit alias accusamus ipsam labore quasi. Consequatur id vero maxime aut est veniam et cum corrupti.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 52',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Harum ipsa voluptas vel minus rerum error. Nihil non enim praesentium voluptas. Dolorum qui veniam mollitia sunt facilis id eos.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 53', score: 'amber' },
              { type: 'workshop', title: 'Workshop 54', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 53',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Rerum saepe veritatis minima quia error et.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Placeat modi sit nostrum sed qui cum dignissimos ut quod.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Placeat iste quia neque molestiae eos. Corrupti alias est reiciendis consequatur iusto rem nesciunt omnis ut.',
            },
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 54', score: 'red' },
              { type: 'workshop', title: 'Workshop 55', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 54',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Nesciunt ut accusamus excepturi veritatis quo.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Temporibus autem molestiae eius qui aut. Rerum similique illum eos corporis voluptatibus aut. Nam qui ratione.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 55',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Numquam nostrum ullam necessitatibus molestias neque dignissimos alias possimus. Modi quo aliquid et est. Labore sapiente error ducimus aut corporis.',
            },
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: true,
            recapTask: {
              title: 'Platform and cloud engineering',
              score: 'green',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 56', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 56',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Ab modi ut.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Doloremque ut eos iste.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Qui dolore ut nobis autem voluptas unde eligendi minus. Excepturi soluta vel quo laudantium fugiat rerum voluptatem praesentium. Molestiae dignissimos sint dolorum possimus sint. Non reprehenderit expedita sit similique nihil repellat blanditiis nisi assumenda.',
            },
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 57', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 57',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Facilis eaque ut quae vitae optio ducimus a illo reprehenderit. Dolorem est dolores sit voluptatem. Ex quis labore. Et totam itaque.',
            },
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 58',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Voluptas officia incidunt a odio perferendis est ratione porro beatae.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Necessitatibus occaecati molestiae sit est dolore error alias. Velit cumque rem sint alias voluptatem. Eaque corporis a impedit commodi.',
            },
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 59', score: 'green' },
              { type: 'workshop', title: 'Workshop 60', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 59',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Ducimus aut delectus libero dolorum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Qui recusandae illo occaecati cum optio nostrum aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Tenetur repudiandae alias occaecati. Aut est architecto omnis. Delectus dolores placeat itaque et numquam eos.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 60', score: 'green' },
              { type: 'workshop', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 60',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Aut adipisci expedita esse ipsam aut blanditiis est sunt debitis. Sit omnis quas sunt fugit qui et laborum magnam sint.',
            },
          },
        ],
      },
      {
        info: {
          id: 9,
          name: 'Shari Luettgen',
          username: 'Nasir.Littel',
          avatar: 'https://cdn.fakercloud.com/avatars/abdulhyeuk_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 1',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Est sit voluptatem esse enim perspiciatis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quos repudiandae omnis similique ea sed consequatur optio assumenda. Sint saepe voluptas aut eum quia.',
            },
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 2', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 2',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Explicabo corrupti harum odit ab doloribus.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Expedita beatae labore nostrum quia esse sequi est non perferendis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Sunt adipisci dolor. Et modi suscipit.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 4',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Incidunt voluptas quisquam ipsam dicta voluptatibus. Autem minus distinctio sapiente ut inventore. Assumenda est quos. Est deleniti quidem.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 5',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Commodi ratione qui itaque reiciendis omnis aut incidunt odit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sint rem necessitatibus dicta occaecati. Ea sit modi praesentium quam ipsam. Dolorem atque libero dicta adipisci omnis esse ut quia. Quisquam sapiente maiores laudantium doloribus doloribus.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 7',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Excepturi eius et excepturi omnis.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Accusantium eveniet harum. Sunt sit nihil quo ullam et ut.',
            },
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 9',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'In eligendi excepturi ratione a ut quo.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Dolore omnis dolorem ut mollitia.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Inventore quis in adipisci perferendis dolor vitae aut. Nobis qui adipisci reiciendis. Distinctio nisi aliquid illum voluptatem qui harum quaerat.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 10',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Vel aut facilis.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'In minus mollitia eligendi quia non autem dolorem. Nemo est odit exercitationem ad accusantium.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'green',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 11',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Suscipit dolorem tempora ut cum quasi.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia minima quis enim est et. Tenetur temporibus vitae eum dolorem.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
              { type: 'workshop', title: 'Workshop 13', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Consequuntur quisquam ut illo iure.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Ea quasi nihil ab ea quidem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quidem tempore ea suscipit earum. Aliquam culpa id odit aliquam soluta autem nisi earum.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 14',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quo et vel magni. Quaerat ipsa at delectus quidem quasi tempora et possimus vitae. Rerum qui expedita dolorem corrupti iusto reiciendis. Quo explicabo non laboriosam officiis debitis assumenda.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 15', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 15',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Voluptas est qui aut architecto doloribus.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sed sed ipsa rerum quod est magni aliquam. Placeat ut perferendis error voluptate dignissimos praesentium ea. Aut sit fugiat saepe.',
            },
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: true,
            recapTask: {
              title: 'Databases and APIs',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 16', score: 'amber' },
              { type: 'workshop', title: 'Workshop 17', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 16',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Incidunt asperiores et optio quo dolorem quia sed rerum ipsa.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Magni exercitationem aliquam possimus eos sequi. Nihil voluptatem omnis ratione iure animi et velit ipsum.',
            },
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 17', score: 'amber' },
              { type: 'workshop', title: 'Workshop 18', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 17',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Cumque illo aspernatur eum fuga voluptates non unde.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ex minima inventore et est dolorum. Debitis perspiciatis ad aut. Rerum quos sit cumque aliquam minus delectus explicabo inventore nostrum.',
            },
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 19',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Accusantium et illum quae voluptates.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Explicabo reiciendis velit consectetur. Perferendis dolorum non inventore sequi sed asperiores aliquam cupiditate aut. Corrupti quas ipsam quae excepturi sed quibusdam alias.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: true,
            recapTask: {
              title: 'Testing and Paradigms',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 21', score: 'amber' },
              { type: 'workshop', title: 'Workshop 22', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 21',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Laborum fuga aut recusandae vitae occaecati at voluptate.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Aut repudiandae fuga illo aut sit sequi. Odit consequatur et sed.',
            },
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 22',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Similique provident perferendis sed illum facere voluptas repudiandae.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Corporis sequi unde odio aut earum. Numquam eos error aliquid dolorem sapiente saepe veniam ducimus omnis.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Iusto dolor et odio quasi ut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Est molestiae illum et. Vero nihil iste et. Iure et nesciunt fuga tempora officiis enim ea.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 24', score: 'amber' },
              { type: 'workshop', title: 'Workshop 25', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 24',
              score: '12/15',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Pariatur quas est tenetur quia porro voluptatem qui.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Animi perferendis atque corporis nam fuga veniam sint ad. Facilis ipsa eos eligendi sint dolorem.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 25', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 25',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Doloribus voluptate facilis ut est.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia pariatur optio est omnis. Qui nobis incidunt nihil in tempora voluptate eveniet sunt in. Perspiciatis voluptas voluptates sit. Minus et optio repellendus dolores quis praesentium nostrum occaecati.',
            },
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 26', score: 'red' },
              { type: 'workshop', title: 'Workshop 27', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 26',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Pariatur eum est optio possimus incidunt voluptates autem. Vel non nostrum molestiae est dignissimos voluptatem inventore harum.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 27',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Omnis voluptates necessitatibus porro.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quos dolor maxime vitae unde. Voluptas fugiat minima sit et vel laborum. Qui nam sequi et est rem nostrum harum. Hic sapiente nulla aspernatur suscipit.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 28',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Quis aut id natus.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Corporis quas odit sed autem labore consectetur qui qui. Veniam molestias quo. Voluptas nostrum nisi atque unde quibusdam magnam.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 30', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 30',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Nihil quia ut commodi. Officiis consequatur reiciendis repudiandae quo non expedita. Velit voluptatibus eveniet veritatis doloremque quia temporibus atque alias veniam. Quisquam maxime rerum voluptatem non incidunt perspiciatis.',
            },
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'red',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 31',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Similique perspiciatis voluptas tempore aut doloribus laborum aperiam.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Esse sequi repudiandae.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sequi est laborum cum enim sit dolorem. Repellat perspiciatis eius. Est veritatis quidem nam. Fugit eum qui.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 32', score: 'amber' },
              { type: 'workshop', title: 'Workshop 33', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 32',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Sunt sint possimus aut iste non.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia numquam deserunt voluptas. Inventore ipsam qui dolorum neque ut quis officia ullam sequi. Laboriosam suscipit voluptas autem ab aperiam distinctio quo voluptas debitis.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 35', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 35',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Ab labore rerum rem cumque et officia dolorem vitae.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Nemo aut eos laborum corporis enim.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum impedit nihil dolorum fugit officia asperiores necessitatibus enim. Est aut qui nam enim est odio natus illum qui. Similique et aliquid harum ex.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 37', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 37',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Consequatur quasi ducimus debitis impedit at. Aut id quia.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 38',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Quaerat quia corporis quae.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Similique corrupti voluptas quo odit odit earum tenetur aspernatur. Praesentium eaque ut cum at est libero.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 39', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 39',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Illo mollitia voluptatibus sit porro.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Unde quo ut et quo molestias. Iure incidunt ad et eum laudantium voluptatum impedit est animi. Ex necessitatibus laudantium dicta exercitationem omnis praesentium quibusdam aut.',
            },
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 41',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Doloribus sit omnis qui occaecati reprehenderit dolor ipsa ut expedita.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quae sapiente laboriosam. Sint porro quia reprehenderit enim ut cumque omnis deserunt atque.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Delectus quaerat modi. Est reprehenderit culpa repellat consequuntur beatae libero aliquam hic hic. Sed ullam ipsum.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 43', score: 'amber' },
              { type: 'workshop', title: 'Workshop 44', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 43',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Quam beatae rem est quisquam dolore consequuntur consequuntur dolorem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Recusandae harum similique quisquam vero rem doloribus. Dicta totam vero est ducimus dolores itaque aperiam. Sapiente occaecati autem aut laboriosam deserunt a. Aut sit sed voluptatibus aut.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 44',
              score: '7/8',
              percentage: 88,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Nesciunt perferendis in veniam aperiam quia maxime autem est qui.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Quas exercitationem non saepe.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Consequatur iusto et ipsum quas voluptas sed molestiae. Voluptatem consequatur optio aliquid facilis. Odit molestiae ut nisi eligendi soluta rerum dolorem.',
            },
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 45', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 45',
              score: '9/11',
              percentage: 82,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment:
                  'Fuga consequatur qui quia doloremque et voluptas et cum perspiciatis.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Quia ea dolorum culpa quia animi qui.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem asperiores dolorem et et sequi. Inventore nam dolore qui sapiente animi nobis. Nihil voluptates quasi. Sit molestiae recusandae accusamus incidunt explicabo blanditiis laudantium laborum explicabo.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: true,
            recapTask: {
              title: 'Advanced computer science concepts',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 46',
              score: '12/15',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Itaque quas ut sed non.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ea qui eaque et. Ipsam velit omnis unde quia voluptatem sit sint recusandae eos.',
            },
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 48', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 48',
              score: '12/15',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Et nobis cupiditate sint porro in. Ullam esse perferendis explicabo consectetur et aliquam. Voluptatum eligendi occaecati illum porro suscipit quaerat. Est repellendus magnam fugit dolores perferendis eius atque voluptatibus neque.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 49',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Voluptate quasi accusamus tenetur sunt provident qui totam expedita.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Hic et eveniet a.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ea ut similique dignissimos. Eos est suscipit totam ipsa adipisci neque est ut. Dolorem non dicta debitis.',
            },
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 50',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Ut in et aliquid nobis.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Veniam natus illum nihil saepe sint qui numquam quo.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Consequatur eius eligendi error soluta. Modi architecto et deserunt modi exercitationem molestias.',
            },
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 52', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 52',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Occaecati et quod consequuntur rerum quod quam dolorem temporibus molestiae. Hic ut non earum non mollitia ut sit. Voluptatem et asperiores. Ullam ea occaecati ab.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 54',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 3,
                comment: 'Amet id ad ut consequuntur nesciunt reprehenderit.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Cupiditate officiis qui necessitatibus est reprehenderit eaque.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vel iure sunt impedit incidunt reprehenderit sapiente eum et. Itaque rerum laboriosam aut et. Placeat veniam voluptatem iusto modi quae doloremque.',
            },
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 55', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 55',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Ipsa quis vero unde nisi laboriosam tempora at.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'A dolorem quisquam aspernatur quia architecto fugiat.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Magni quis odio quisquam possimus doloribus qui. Voluptatum officia iste expedita laborum repudiandae dolores iste. Et minima id qui qui.',
            },
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 57',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Nesciunt ex et repellat aliquid ipsa molestiae quasi.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment:
                  'Voluptatem animi delectus vel necessitatibus ut sed ut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Porro id ea expedita officiis est sint nobis unde et. Enim et eum quidem maxime officia possimus minima. Laboriosam vel impedit cupiditate alias mollitia.',
            },
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 59', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 59',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Aut temporibus ad error ipsa iste et.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Molestiae vel et minima inventore consectetur culpa officiis. Sunt hic provident est.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
        ],
      },
      {
        info: {
          id: 10,
          name: 'Ira Block DDS',
          username: 'Maximo22',
          avatar: 'https://cdn.fakercloud.com/avatars/rodnylobos_128.jpg',
        },
        work: [
          {
            date: '2021-05-26',
            week: 1,
            day: 1,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-27',
            week: 1,
            day: 2,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 2',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Ratione eius qui impedit sed vero ea.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Magnam nisi saepe voluptatum aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Est sed quod quis nemo dolorum aut. Quo sit repellat cum aut. A unde amet illo.',
            },
          },
          {
            date: '2021-05-28',
            week: 1,
            day: 3,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-05-29',
            week: 1,
            day: 4,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 4',
              score: '8/13',
              percentage: 62,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Aspernatur autem exercitationem beatae nesciunt eveniet est voluptas ea nam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Eos nihil ullam sed. Magnam inventore mollitia voluptatem. Fuga est asperiores necessitatibus est.',
            },
          },
          {
            date: '2021-05-30',
            week: 1,
            day: 5,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 5',
              score: '6/9',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Tempore laudantium officia et velit ipsam voluptatum eos. Molestiae quibusdam voluptatem nihil in esse.',
            },
          },
          {
            date: '2021-05-31',
            week: 2,
            day: 6,
            didAttend: true,
            recapTask: { title: 'Advanced JS', score: 'amber', type: 'recap' },
            workshops: [
              { type: 'workshop', title: 'Workshop 6', score: 'red' },
              { type: 'workshop', title: 'Workshop 7', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 6',
              score: '9/14',
              percentage: 65,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Voluptates maxime reiciendis perferendis dignissimos sed.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Non impedit tempore.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Doloribus dolorem sed quasi nostrum quod. Dolorem assumenda ut excepturi ut saepe voluptas cupiditate ipsa.',
            },
          },
          {
            date: '2021-06-01',
            week: 2,
            day: 7,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 7', score: 'amber' },
              { type: 'workshop', title: 'Workshop 8', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 7',
              score: '8/12',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Vero voluptas ut rem nisi beatae provident.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Ipsa dolorum est sed porro nam qui vero quibusdam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Id laborum rerum. Vel ab modi reprehenderit sunt pariatur cupiditate sunt culpa hic.',
            },
          },
          {
            date: '2021-06-02',
            week: 2,
            day: 8,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-03',
            week: 2,
            day: 9,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 9', score: 'amber' },
              { type: 'workshop', title: 'Workshop 10', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 9',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Cupiditate placeat enim nobis quo laboriosam adipisci.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'In sed voluptatem temporibus qui.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Officiis nam at molestias autem. Non quisquam porro nihil totam porro cumque necessitatibus. Earum deserunt animi beatae quia cupiditate earum sed.',
            },
          },
          {
            date: '2021-06-04',
            week: 2,
            day: 10,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 10', score: 'amber' },
              { type: 'workshop', title: 'Workshop 11', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 10',
              score: '9/13',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Rerum consequuntur accusamus repellendus mollitia est ipsa et facere sit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quasi saepe et nisi tempore fuga deleniti eius temporibus quam. In itaque maiores dolor dolor et laudantium cum harum. Quae neque alias voluptatum nobis ratione aut voluptas vitae.',
            },
          },
          {
            date: '2021-06-05',
            week: 3,
            day: 11,
            didAttend: true,
            recapTask: {
              title: 'Node and Express',
              score: 'red',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 11',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Minima sunt porro culpa ut quia sed.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Consequatur sapiente neque natus est doloremque assumenda dignissimos animi. Est amet architecto voluptate aut nostrum possimus voluptates. Ut voluptas nostrum perspiciatis dolorem et quaerat voluptatibus dolor. Optio id sed eos sed fugit harum quos qui perferendis.',
            },
          },
          {
            date: '2021-06-06',
            week: 3,
            day: 12,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 12', score: 'amber' },
              { type: 'workshop', title: 'Workshop 13', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 12',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Dolorem placeat asperiores qui porro in placeat.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Autem voluptate possimus animi. Qui quidem vel illo adipisci enim. Quo accusamus eum neque praesentium. Rerum qui illum officia numquam doloribus delectus.',
            },
          },
          {
            date: '2021-06-07',
            week: 3,
            day: 13,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 13',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Dolor enim ipsam.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sit magni ut qui dolore id. Voluptatem sint dicta repellendus consectetur voluptas et numquam perspiciatis dolor.',
            },
          },
          {
            date: '2021-06-08',
            week: 3,
            day: 14,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 14', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 14',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Soluta similique deleniti veritatis est alias et sint fuga modi. Consequatur harum alias assumenda eos ut veritatis. Repudiandae soluta optio qui. Officiis voluptatem voluptas error dolores odio veritatis similique dignissimos quae.',
            },
          },
          {
            date: '2021-06-09',
            week: 3,
            day: 15,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-10',
            week: 4,
            day: 16,
            didAttend: true,
            recapTask: {
              title: 'Databases and APIs',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 16', score: 'amber' },
              { type: 'workshop', title: 'Workshop 17', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 16',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Eum quo veritatis.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Architecto sed esse rerum rerum error veritatis. Est omnis qui mollitia nesciunt quae doloribus omnis. Non facilis consequuntur ipsam aliquam saepe sint. Aut aliquam rerum quaerat eum earum voluptas vel.',
            },
          },
          {
            date: '2021-06-11',
            week: 4,
            day: 17,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 17', score: 'amber' },
              { type: 'workshop', title: 'Workshop 18', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 17',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Dolor dolor aut facilis voluptatibus a possimus esse. Nobis et reprehenderit porro et fugit facilis voluptates sunt sunt. Ut numquam minima quia ullam. Autem ea velit saepe magni ducimus perspiciatis vero ut.',
            },
          },
          {
            date: '2021-06-12',
            week: 4,
            day: 18,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 18', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 18',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Inventore illo voluptatem quis dolore quibusdam earum.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Maxime neque hic culpa in quae aperiam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sit rem doloremque dicta. Enim cum maiores repellat reiciendis earum officiis. Ut non est eos.',
            },
          },
          {
            date: '2021-06-13',
            week: 4,
            day: 19,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 19', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 19',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Quam quia expedita et blanditiis ab iure vel.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Quos odit voluptas sed exercitationem.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Officia consectetur temporibus at eaque omnis. Enim ut est quia saepe dolores maiores. Dolore ea sed ipsam magnam mollitia.',
            },
          },
          {
            date: '2021-06-14',
            week: 4,
            day: 20,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 20',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Alias inventore magni cupiditate repellendus in.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Quia omnis voluptatem. Et porro sit ullam ut sit et.',
            },
          },
          {
            date: '2021-06-15',
            week: 5,
            day: 21,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-16',
            week: 5,
            day: 22,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 22', score: 'amber' },
              { type: 'workshop', title: 'Workshop 23', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 22',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Officiis distinctio in autem ipsam ipsa ipsa ut ut quo.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Fugit sed qui quia sit.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Sit neque et. Ut culpa autem qui quasi. Modi ea rem necessitatibus dignissimos modi.',
            },
          },
          {
            date: '2021-06-17',
            week: 5,
            day: 23,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 23', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 23',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment:
                  'Sapiente quidem ullam reiciendis dolores sint culpa totam quos.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vero sit et quos amet assumenda voluptatem ipsa. Qui aliquid quam totam necessitatibus nam. Qui dolorem ipsa quod.',
            },
          },
          {
            date: '2021-06-18',
            week: 5,
            day: 24,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 24', score: 'amber' },
              { type: 'workshop', title: 'Workshop 25', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 24',
              score: '10/13',
              percentage: 77,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Minus non quo quia numquam est. Incidunt ea omnis cum pariatur quaerat qui et nihil harum.',
            },
          },
          {
            date: '2021-06-19',
            week: 5,
            day: 25,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 25',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Quas voluptatem hic laudantium quam consequatur aut sapiente voluptas. Nobis quo dicta quae enim vel aliquam consectetur quisquam.',
            },
          },
          {
            date: '2021-06-20',
            week: 6,
            day: 26,
            didAttend: true,
            recapTask: {
              title: 'Introduction to React',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 26', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 26',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Rem architecto eum omnis eos animi.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Rerum fuga sunt est eos aliquam ea esse omnis. Aliquid unde est voluptatem non saepe. Voluptas debitis officia quas.',
            },
          },
          {
            date: '2021-06-21',
            week: 6,
            day: 27,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 27', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 27',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Quidem a necessitatibus optio deleniti sint.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 3,
                comment: 'Sed velit iusto est ratione illo.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quia sequi necessitatibus rerum omnis qui. Dolor voluptatibus officia explicabo autem porro sequi sequi ex totam. Autem doloremque beatae minima architecto. Est voluptas qui sunt accusantium quisquam totam reprehenderit rem quis.',
            },
          },
          {
            date: '2021-06-22',
            week: 6,
            day: 28,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 28', score: 'amber' },
              { type: 'workshop', title: 'Workshop 29', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 28',
              score: '10/15',
              percentage: 67,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Voluptatem quas aperiam sit nobis consequatur voluptas ullam.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Alias mollitia dolor assumenda rerum sit itaque libero. Assumenda deleniti qui ad qui tempore similique et culpa.',
            },
          },
          {
            date: '2021-06-23',
            week: 6,
            day: 29,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 29',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Et quis totam eveniet.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Necessitatibus nostrum delectus voluptatem enim. Dolore perspiciatis necessitatibus cupiditate et labore distinctio blanditiis. Doloremque omnis ratione.',
            },
          },
          {
            date: '2021-06-24',
            week: 6,
            day: 30,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-06-25',
            week: 7,
            day: 31,
            didAttend: true,
            recapTask: {
              title: 'Advanced React and Design Thinking process',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 31', score: 'amber' },
              { type: 'workshop', title: 'Workshop 32', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 31',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Error doloribus est qui quaerat molestiae ut non sunt.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Occaecati sed atque quisquam. Quia fugiat omnis placeat et dolor culpa architecto in. Eligendi aut id sed repudiandae rerum. Numquam ab beatae omnis voluptas officia dolor atque eaque.',
            },
          },
          {
            date: '2021-06-26',
            week: 7,
            day: 32,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 32',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Accusantium earum similique rerum fugit nisi unde odit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Qui omnis sint omnis temporibus qui. Aperiam illo corrupti aliquid. Beatae quia exercitationem cupiditate tempora cumque quidem dolorum.',
            },
          },
          {
            date: '2021-06-27',
            week: 7,
            day: 33,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 33', score: 'green' },
              { type: 'workshop', title: 'Workshop 34', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 33',
              score: '11/15',
              percentage: 74,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Velit aut quasi et saepe laudantium amet. Placeat eveniet aliquam enim aut quo debitis reprehenderit earum. Autem atque accusamus nemo temporibus. Sunt quis nostrum.',
            },
          },
          {
            date: '2021-06-28',
            week: 7,
            day: 34,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 34', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 34',
              score: '8/10',
              percentage: 80,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Ut repudiandae porro quis autem nam laudantium voluptatem quo explicabo.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Voluptates eos ut. Sunt a illum adipisci.',
            },
          },
          {
            date: '2021-06-29',
            week: 7,
            day: 35,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 35', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 35',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Rerum earum velit impedit nobis vitae quas dolorem. Occaecati sequi facilis. Tempora dolorum labore ratione praesentium expedita beatae ex.',
            },
          },
          {
            date: '2021-06-30',
            week: 8,
            day: 36,
            didAttend: true,
            recapTask: { title: 'Project Week', score: 'amber', type: 'recap' },
            workshops: [],
            quiz: {
              title: 'Quiz 36',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Iusto voluptatibus et consequatur aliquid dolores animi est qui.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Sed fugiat consequatur tempora eos magnam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Ea aliquam rerum tempore optio soluta. Consequatur error omnis ipsum mollitia laudantium. Mollitia ad expedita animi. Est voluptates est rerum quae consequuntur.',
            },
          },
          {
            date: '2021-07-01',
            week: 8,
            day: 37,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 37',
              score: '7/9',
              percentage: 78,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Asperiores consequatur sint neque reprehenderit.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Inventore mollitia voluptate. Dolore et quod quasi hic eum quo odio nulla. Saepe in quo ipsum tenetur. Aut nulla eaque ab ipsam explicabo iusto.',
            },
          },
          {
            date: '2021-07-02',
            week: 8,
            day: 38,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 38', score: 'amber' },
              { type: 'workshop', title: 'Workshop 39', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 38',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content: 'Sit optio neque. Modi et tempore deserunt voluptates.',
            },
          },
          {
            date: '2021-07-03',
            week: 8,
            day: 39,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-04',
            week: 8,
            day: 40,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 40',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Reprehenderit amet dolorum ab saepe quis sequi.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quam soluta sapiente dolores quia ut mollitia voluptatem. Sit ullam et non rerum ipsam ullam non tenetur. Facilis pariatur et delectus inventore et quia nemo ipsum. Reprehenderit error consectetur amet natus.',
            },
          },
          {
            date: '2021-07-05',
            week: 9,
            day: 41,
            didAttend: true,
            recapTask: {
              title: 'Retros and Deployment',
              score: 'amber',
              type: 'recap',
            },
            workshops: [],
            quiz: {
              title: 'Quiz 41',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Eos quos et minima consequatur magnam id amet sit amet.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Qui dicta voluptatem possimus ad accusamus blanditiis quidem possimus explicabo. Ex tenetur eos nisi quod inventore ullam eum. Esse minus beatae et ex expedita eos.',
            },
          },
          {
            date: '2021-07-06',
            week: 9,
            day: 42,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 42', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 42',
              score: '11/14',
              percentage: 79,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment:
                  'Explicabo debitis quod repellendus expedita provident deleniti iste.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Nisi labore beatae molestiae in rerum quisquam velit et. Atque repudiandae praesentium in explicabo expedita. Eius ut tempora et ducimus dolor at animi. Labore cupiditate cum quidem dicta ratione non laboriosam in quia.',
            },
          },
          {
            date: '2021-07-07',
            week: 9,
            day: 43,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 43',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Id numquam saepe.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'In ratione ut ad.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Inventore rerum autem enim nulla numquam. Ullam provident dolorem quae animi voluptatem ex sint quis. Assumenda omnis consectetur nam.',
            },
          },
          {
            date: '2021-07-08',
            week: 9,
            day: 44,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 44', score: 'green' },
              { type: 'workshop', title: 'Workshop 45', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 44',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Sed nam eum perferendis atque officia accusantium repudiandae et distinctio. Rerum quia omnis repellendus voluptatem veniam dolor est.',
            },
          },
          {
            date: '2021-07-09',
            week: 9,
            day: 45,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 45',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Voluptatem consequatur aut corrupti earum. Animi sit quis esse minus laudantium et.',
            },
          },
          {
            date: '2021-07-10',
            week: 10,
            day: 46,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-11',
            week: 10,
            day: 47,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 47',
              score: '8/11',
              percentage: 73,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Dolores sit dolor sunt et nam aliquam et excepturi.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment: 'Amet velit culpa id aut.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quas qui sunt dolor perferendis rerum ipsam vero molestiae vel. Dolores placeat odio ea quam reprehenderit quo ad sit laudantium.',
            },
          },
          {
            date: '2021-07-12',
            week: 10,
            day: 48,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 48',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Non qui repellat maxime aspernatur. Alias impedit pariatur aut illo qui beatae. Modi et dolor et repellendus officia id aut laborum.',
            },
          },
          {
            date: '2021-07-13',
            week: 10,
            day: 49,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-14',
            week: 10,
            day: 50,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-15',
            week: 11,
            day: 51,
            didAttend: true,
            recapTask: {
              title: 'Typescript and advanced tools',
              score: 'red',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 51', score: 'green' },
            ],
            quiz: {
              title: 'Quiz 51',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Minima quibusdam aut eos ad.',
              },
            ],
            reflection: {
              type: 'reflection',
              content: 'Fugiat commodi omnis. Sed est et commodi ab.',
            },
          },
          {
            date: '2021-07-16',
            week: 11,
            day: 52,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 52', score: 'red' },
            ],
            quiz: {
              title: 'Quiz 52',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [{}, {}],
            reflection: {
              type: 'reflection',
              content:
                'Ipsam dicta culpa voluptate nisi nemo dolor et aperiam libero. In libero sunt laudantium repellat odit quaerat esse.',
            },
          },
          {
            date: '2021-07-17',
            week: 11,
            day: 53,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 53',
              score: '7/10',
              percentage: 70,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'Quo repellendus ut.',
              },
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 2,
                comment: 'Fuga impedit at quia quasi modi.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Quis laboriosam ut eveniet et sed voluptatem. Vel illo ullam numquam ea in.',
            },
          },
          {
            date: '2021-07-18',
            week: 11,
            day: 54,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-19',
            week: 11,
            day: 55,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-20',
            week: 12,
            day: 56,
            didAttend: true,
            recapTask: {
              title: 'Platform and cloud engineering',
              score: 'amber',
              type: 'recap',
            },
            workshops: [
              { type: 'workshop', title: 'Workshop 56', score: 'amber' },
              { type: 'workshop', title: 'Workshop 57', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 56',
              score: '10/14',
              percentage: 72,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment:
                  'Quo blanditiis nemo reiciendis quam in numquam tenetur.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Illo perferendis quasi nostrum debitis. Aut est magnam dolores est voluptas dolore voluptate dicta blanditiis.',
            },
          },
          {
            date: '2021-07-21',
            week: 12,
            day: 57,
            didAttend: true,
            recapTask: null,
            workshops: [
              { type: 'workshop', title: 'Workshop 57', score: 'amber' },
              { type: 'workshop', title: 'Workshop 58', score: 'amber' },
            ],
            quiz: {
              title: 'Quiz 57',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 2,
                comment: 'In officiis sed illum.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Vel autem impedit ut adipisci unde sunt aut. Officia deserunt ab et ut. Dignissimos laborum excepturi nesciunt neque placeat beatae dolorum sit. Maxime quod odio sint ut.',
            },
          },
          {
            date: '2021-07-22',
            week: 12,
            day: 58,
            didAttend: false,
            recapTasks: null,
            workshops: null,
            quiz: null,
            feedback: null,
            reflection: null,
          },
          {
            date: '2021-07-23',
            week: 12,
            day: 59,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 59',
              score: '9/12',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {},
              {
                type: 'feedback',
                timeOfDay: 'afternoon',
                experienceRating: 1,
                comment:
                  'Voluptates qui laudantium eaque cumque debitis ex facere totam.',
              },
            ],
            reflection: {
              type: 'reflection',
              content:
                'Et et repellat quae magni. Hic quia amet autem animi velit qui sit.',
            },
          },
          {
            date: '2021-07-24',
            week: 12,
            day: 60,
            didAttend: true,
            recapTask: null,
            workshops: [],
            quiz: {
              title: 'Quiz 60',
              score: '6/8',
              percentage: 75,
              type: 'quiz',
            },
            feedback: [
              {
                type: 'feedback',
                timeOfDay: 'morning',
                experienceRating: 1,
                comment: 'Dolores hic cumque sit eos.',
              },
              {},
            ],
            reflection: {
              type: 'reflection',
              content:
                'Numquam adipisci quo optio est aspernatur voluptatem. Quia temporibus aspernatur qui nemo eos rerum labore quam.',
            },
          },
        ],
      },
    ],
  },
];
module.exports = { data };
