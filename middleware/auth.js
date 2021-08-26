export default async function ({ store, redirect, app }) {
    if (!store.state.authenticated) {
       const token = app.$cookies.get('jwt');

       const valid = await store.dispatch('validateToken',{token});
       if(!valid){
          return redirect('/login');
       }
    }
}