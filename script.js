fetch('./data.json')
  .then((res) => {
    return res.json();
  }).then((obj) => {
      let sum=0;
      let avg;
      obj.forEach((element) => {

      document.querySelector("#result").innerHTML += `
        <div class="result-type-item ${element.category.toLowerCase()}">
          <span class="result-type"><img src="${element.icon}" alt="${element.category} Icon">${element.category}</span>
          <span class="result"><span class="value">${element.score}</span> / 100</span>
        </div>`;

        sum += element.score;

    });

    avg = Math.round(sum / obj.length);
    document.querySelector(".avarage-result").innerText = avg;
  }).catch((err)=>{
    console.error('Error Occured!');
    console.error(err);
  });