

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Aliqua consequat esse magna ullamco et pariatur anim eiusmod.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Non nostrud sunt minim aliquip deserunt eiusmod exercitation ullamco ut proident officia nulla. Adipisicing commodo consectetur aute ut esse ex adipisicing veniam elit ex sint. Proident ex nulla ipsum quis cillum veniam dolor nostrud id magna consequat esse. Id nisi voluptate labore deserunt incididunt ullamco cillum.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Quis laboris in occaecat sit enim anim ullamco deserunt. Ut excepteur cupidatat sit aliquip. Occaecat duis excepteur tempor labore dolor eu duis.',
            picture: null
        }
    ]
})