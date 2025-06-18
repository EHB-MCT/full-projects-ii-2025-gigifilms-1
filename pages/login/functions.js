async function login() {
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  
  try {
    authData = await pb.collection('admin').authWithPassword(
      localStorage.getItem("email"),
      localStorage.getItem("password")
    );
    localStorage.setItem('userType', 'admin');
    localStorage.setItem("userID", authData.record.id);
    location.href='../profile/'
  } catch (error) {
    try {
      authData = await pb.collection('Regiseur').authWithPassword(
        localStorage.getItem("email"),
        localStorage.getItem("password")
      );
      localStorage.setItem('userType', 'Regiseur');
      localStorage.setItem("userID", authData.record.id);
      location.href='../profile/'
    } catch (error) {
      try {
        authData = await pb.collection('users').authWithPassword(
          localStorage.getItem("email"),
          localStorage.getItem("password")
        );
        localStorage.setItem('userType', 'users');
        localStorage.setItem("userID", authData.record.id);
        location.href='../profile/'
      } catch (error) {
        console.log('invalid user');
      }
    }
  }
}