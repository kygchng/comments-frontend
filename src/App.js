import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Card from './Card';

// App > ApprovalCard > CommentDetail

const App = () => {
  console.log("hi peter");
  return (
    <div className = "ui container comments">

      <Card
        image = "https://toptenrealestatedeals.com/wp-content/uploads/2019/07/wk_5d268d22549d8.jpg"
        headerURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoptenrealestatedeals.com%2Fweekly-ten-best-home-deals%2Fhome%2Fbarry-manilows-malibu-beach-house&psig=AOvVaw2j1BG8MjbiezSkObN-zYHP&ust=1633749868664000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODrtd3uufMCFQAAAAAdAAAAABAD"
        header = "Malibu Beach House"
        date = "Today at 8:38AM"
        text = "Expensive"
      />

      <Card
        image = "https://toptenrealestatedeals.com/wp-content/uploads/2019/07/wk_5d268d22549d8.jpg"
        headerURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoptenrealestatedeals.com%2Fweekly-ten-best-home-deals%2Fhome%2Fbarry-manilows-malibu-beach-house&psig=AOvVaw2j1BG8MjbiezSkObN-zYHP&ust=1633749868664000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODrtd3uufMCFQAAAAAdAAAAABAD"
        header = "Malibu Beach House"
        date = "Today at 8:38AM"
      />


      <ApprovalCard>
        <CommentDetail 
          imageURL = "https://avatar.fandom.com/wiki/Iroh"
          image = "data:image/jpeg;base64,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"
          authorURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          author = "Uncle Iroh"
          time = "Yesterday at 4:20PM"
          text = "Bruh you ran away ... now everyone is ded."
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          imageURL = "https://avatar.fandom.com/wiki/Sokka"
          image = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/a/ad/Sokka_img.jpg"
          authorURL = "https://www.youtube.com/watch?v=ajHYExlitRc"
          author = "Sokka"
          time = "Yesterday at 4:22PM"
          text = "Your mom's ded."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          imageURL = "https://avatar.fandom.com/wiki/Toph_Beifong"
          image = "http://images4.wikia.nocookie.net/__cb20081225191856/avatar/images/2/2e/Toph.png"
          authorURL = "https://www.youtube.com/watch?v=H9Yk5rictuc"
          author = "Toph"
          time = "Yesterday at 4:25PM"
          text = "lol"
        />
      </ApprovalCard>
      

    </div>
  );
};


export default App;
