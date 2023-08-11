function pageTransition() {
    var tl = gsap.timeline();

    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
  }

  function contentAnimation(){
    var tl = gsap.timeline({defaults:{duration: 1}})
    tl.from('.stagger', {y: -50, stagger: .6, opacity: 0})
    .to('#circle', {scaleY: 50, scaleX: 50, repeat:-1, duration: 10}, "-=20.0")
  }

  function delay(n){
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    })
  }

  barba.init({
    sync: true,

    transitions: [{

      async leave(data){

        const done = this.async();
        pageTransition(done);
        await delay(1500);
        done();
      },

      async enter(data){
        contentAnimation();
      },

      async once(data){
        contentAnimation();
      }
    }]
  });