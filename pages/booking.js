import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getDatabase, ref, push, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGczsu10BU_Z-cxvtIzmsvfBNpdxUf9CE",
  authDomain: "hotel-management-app-e908f.firebaseapp.com",
  projectId: "hotel-management-app-e908f",
  storageBucket: "hotel-management-app-e908f.appspot.com",
  messagingSenderId: "624646142077",
  appId: "1:624646142077:web:b2f031b0cdbd004b515914",
  measurementId: "G-ZY5ZJ5XXBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
// firebase confiq


var bookBtn=document.getElementById("bookBtn")

bookBtn.addEventListener("click",function(){
      var obj={}

    obj.fullName=document.getElementById("fullName").value;
    obj.contact=document.getElementById("contact").value;
    obj.cnic=document.getElementById("cnic").value;
    obj.NoOfMembers=document.getElementById("NoOfMembers").value;
    obj.days=document.getElementById("days").value;
    obj.startingDate=document.getElementById("startingDate").value;
    const bookingRef = ref(db, 'bookings');
    const newPostRef = push(bookingRef);
    obj.id=newPostRef.key;
    set(newPostRef,obj).then(function(){
        console.log("success")
    }).catch(function(err){
        console.log("err")
    })
      







    console.log(obj)
})