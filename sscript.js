fetch('./data.json')
  .then((res) => {
    return res.json();
  }).then((obj) => {
      let sum=0;
      let avg;
      const result = document.querySelector("#result");
      

      obj.forEach((element) => {

        const listItem = document.createElement('div'); //div for list item
        
        listItem.classList.add('result-type-item');
        listItem.classList.add(element.category.toLowerCase());

        const resultType = document.createElement('span'); //span for logo and result type

        resultType.classList.add('result-type');

        const icon = document.createElement('img'); //icon img element

        icon.src = element.icon;
        icon.alt = element.category + 'Icon';

        const type = element.category; // result type text
        const score = document.createElement('span'); //span for the result score
        const scoreValue = document.createElement('span'); //span for the actual value
        score.classList.add('result');
        scoreValue.classList.add('value');
        const maxScore = ' / 100';

        
        scoreValue.append(element.score);

        score.append(scoreValue);
        score.append(maxScore);
        resultType.append(icon);
        resultType.append(element.category);
        listItem.append(resultType);
        listItem.append(score);

        result.append(listItem);
        
        sum += element.score;

    });

    avg = Math.round(sum / obj.length);
    document.querySelector(".avarage-result").innerText = avg;
  }).catch((err)=>{
    console.error('Error Occured!');
    console.error(err);
  });