import router from './router';

router.beforeEach((to, from, next) => {
  // setTimeout(() => {
  //   sessionStorage.clear();
  // }, 10000);
  const user = sessionStorage.getItem('pass');
  if (user) {
    next();
  } else {
    if (to.name === 'Login') {
      next();
    } else {
      next({ name: 'Login' });
    }
    from;
  }
});

export default router;
