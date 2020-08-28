<div>
  <h1 align="center">Dynamic images page transition 🦾</h1>
  <p align="center">Smooth page transition with barba.js & GSAP</p>
</div>

![](demo.gif)

## What this repo want to be 🔥

A pratical guide/example to learn how to make smooth page transitions using images as the main component effect.

It is realized using [barba.js](http://https://barba.js.org/ "barba.js") for the page transitions and [GSAP](https://greensock.com/gsap/ "GSAP") for the dom elements effects.

You can find helpful documentation on their websites.

## Instruction

1. Dowload or clone from [repo](https://github.com/Valerioageno/dynamic-images-page-transition.git "repo").
2. open your live server
3. load the "index.html" file in your favorite browser

All the page transitions are stored in the `main.js` file in the follow function:

```javascript

//barba lifecycle
barba.init({
    debug: true,
    transitions: [
    {
        name: 'to-pages',
        async leave(data){
            const done = this.async();
            pageTransitionToPage(data.next.namespace);
            await delay(1300);
            done();
        },
        async enter() {
            contentAnimationToPage();
        },
        from: {
            namespace: 'home',
        },
        to: {
            namespace: [
                'about',
                'products',
                'contacts',
                'portfolio'
            ]
        },
    },
    {
        name: 'to-home',
        async leave(){
            const done = this.async();
            pageTransitionToHome();
            await delay(1000);
            done();
        },
        async enter(data) {
            contentAnimationToHome(data.current.namespace);
        },
        async after(data){
            listItemsShow();
            Cursor()
        },
        from: {
            namespace: [
                'about',
                'products',
                'contacts',
                'portfolio'
            ]
        },
        to: {
            namespcae: 'home'
        }
    },
    ]
});
```

The sequence of the animation from the home page is:
1. Remove the left home page
2. move the corresponding image
3. remove the links list
4. fix the image in the new page
5. show the new title
6. show the back link

