const serverURL = 'http://localhost:3000/';
const token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};
var teste = "";
axios.get(`${serverURL}assets`, token)
    .then(response => {
      console.log(response)
      let modelContainer = document.getElementsByClassName('models-container')[0];
      response.data.forEach((element, index) => {
        if (element.image == "" || element.image == undefined)
          element.image == "";
        let model = document.createElement('div');
        model.classList.add('model');
        model.innerHTML = `
          <div class="model-image-wrapper">
            <img class="model-image" src="${serverURL}projects/image/${element.image}">
          </div>
          <div class="model-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>${element.title}</h2>
          </div>
          <div class="model-flap flap1">
            <div class="model-description">
              <p>${element.subtitle}</p>
            </div>
            <div class="model-flap flap2">
              <div class="model-actions">
                <a href="#" class="btn">Ver Mais</a>
              </div>
            </div>
          </div>
        `;
        modelContainer.appendChild(model);
      });
      loadScreen();
    })
    .catch(err => {

    });


function loadScreen(){
    var zindex = 10;
  
    $("div.model").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.models-container").hasClass("showing")) {
        $("div.model.show")
          .removeClass("show");
  
        if (isShowing) {
          $("div.models-container")
            .removeClass("showing");
        } else {
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
        }
  
        zindex++;
  
      } else {
        $("div.models-container")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
  
    });
};
rrr = ""
function copyProject(assetId, projectId) {
  console.log(`${serverURL}assets/${assetId}/${projectId}`)
  teste = axios.get(`${serverURL}assets/${assetId}/${projectId}`, token)
  .then(response => {
    rrr = response;
    axios.post(`${serverURL}projects`, {title: response.data.assets.title, subtitle: response.data.assets.subtitle}, token)
    .then(response2 => {
      console.log(response2);
      axios.put(`${serverURL}projects/${response2.data._id}`, {
        title: response2.data.title,
        subtitle: response2.data.title,
        image: response.data.assets.image,
        appCode: response.data.data.appCode
      },token)
    });  
  })
  .catch(err => {
    console.log(err)
  })
  console.log(teste)
};