import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    render() {
      return (
        <Router>

  <header className="headerr" id="home">
    <img className="images" src="/images/assorted-salads-on-bowls-1640773.jpg" alt="Hamburger Catering" />
    <div className="phphph">
      <h1 className="xxlarge">Delivery^_^</h1>
    </div>
  </header>
  
  <div className="content">
  
    <div className="row" id="about">
      <div className="col">
      <img src="/images/fried-spring-rolls-840216.jpg" className="round" alt="Table Setting" /> 

      </div>
  
      <div className="col m6">
        <h1 className="center">اطلب الطعام اون لاين</h1><br />
        <h5 className="center">خيارات لا محدودة من الأطباق</h5>
        <p className="large"> 
        من نحن دليفري هو الموقع الإلكتروني المفضل لمحبي الطعام لطلب الطعام 
. نضع بين يديك الكثير من الاكلات العالمية والمحلية. 
يمكنك البحث عن الطعام وطلبه وسوف يعتني دليفري بالباقي.
ما نقوم به
دليفري هو أكبر موقع يحتوي علي أكلات طلب الطعام في مصر ويعمل في أكثر من مدينة لنا فرعين . يمكن للعملاء الطلب أكثر من 1000 أكلة بمنتهى السهولة ، وسوف يعتني ​​دليفري بالباقي. اختار أكلتك المفضلة 
  </p> 
        <p className="large w3-text-grey w3-hide-medium">Who We Are Delivery is the food lover's favorite website for ordering food. We put in your hands a lot of global and local cuisine. You can search for and order food and Delivery will take care of the rest. What we do delivery is the largest site that contains food ordering food in Egypt and it works in more than one city with two branches. Customers can easily order more than 1,000 foods, and Delivery will take care of the rest. Choose your favorite food</p>
      </div>
    </div>
    
    <hr />
    
    <div className="row" id="menu">
      <div className="col l6 w3-padding-large">
        <h1 className="center">Our Menu</h1>
        <br />
        <h4>أطباق الفطار</h4>
        <p className="w3-text-grey">اطباق الفطار جاهزة اطلب الان تواصل معنا وسجل في موقعنا </p><br />
      
        <h4>أطباق الغداء</h4>
        <p className="w3-text-grey"> اطباق الغداء جاهزة اطلب الان تواصل معنا وسجل في موقعنا</p><br />
      
        <h4>أطباق العشاء </h4>
        <p className="w3-text-grey">اطباق العشاء جاهزة اطلب الان تواصل معنا وسجل في موقعنا</p><br />
      
        <h4>توصيل مجاني لمدة شهر</h4>
        <p className="w3-text-grey">سجل في موقعنا وأختار أكلتك المفضلة </p><br />
      
        <h4>أيضا هناك عروض كثيرة</h4>
        <p className="w3-text-grey"> أتمني العروض تعجب حضراتكم نحن في خدمتكم اربعة وعشرين ساعة</p>    
      </div>
      
      <div className="col l6">
        <img src="/images/garlic-shrimp-dish-699544.jpg" className="w3-round w3-image w3-opacity-min" alt="Menu" />
      </div>
    </div>
  
    <hr />
  
    <div className="container contact" id="contact">
      <h1>Contact</h1><br />
      <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
      <p className="texts"><b>Catering service, 64 Misr and Sudan St., next to the Kiosk Mosque - Hadayek El Kobba</b></p>
      <p>You can also contact us by phone 01010198900 or 01116753929 , or you can send us a message here:</p>
      <form action="/action_page.php" target="_blank">
        <p><input className="inppuut" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="inppuut" type="number" placeholder="How many people" required name="People" /></p>
        <p><input className="inppuut" type="datetime-local" placeholder="Date and time" required name="date" value="2017-11-16T20:00" /></p>
        <p><input className="inppuut" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
        <p><button className="butn" type="submit">SEND MESSAGE</button></p>
      </form>
    </div>
    
  </div>
  
  <footer className="ww-center">
    <p><a href="https://github.com/" target="_blank" className="hover-text-green">copyright &copy; 2020 by Abdulrahman</a></p>
  </footer>
  
        </Router>
      );
    }
  }
  
export default App;