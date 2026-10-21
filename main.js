var FORM='<p class="step">Step <b>1</b> of 2</p><h3>Request a free quote</h3><p class="sub">Tell us about your property and we will respond promptly.</p><div class="s1"><p class="q">First, who’s enquiring?</p><div class="pills"><button type="button">Homeowner</button><button type="button">Landlord</button><button type="button">Letting agent</button><button type="button">Commercial</button></div></div><form class="f" hidden><label>Name<input type="text" name="name" required autocomplete="name"></label><label>Phone<input type="tel" name="phone" autocomplete="tel"></label><label>Service<select name="service"><option>Exterior cleaning</option><option>Refurbishment</option><option>Rip-out</option><option>Property upkeep</option><option>End of tenancy clearance</option><option>Property management</option><option>Something else</option></select></label><label>Project details<textarea name="msg" placeholder="Please describe the work required"></textarea></label><button class="btn solid" type="submit">Submit enquiry</button></form>';
var who='';
document.querySelectorAll('[data-form]').forEach(function(c){
  c.innerHTML=FORM;
  var f=c.querySelector('form'),s1=c.querySelector('.s1');
  c.querySelectorAll('.pills button').forEach(function(b){b.onclick=function(){who=b.textContent;s1.hidden=true;f.hidden=false;c.querySelector('.step b').textContent='2';f.name.focus()}});
  f.onsubmit=function(e){e.preventDefault();var d=new FormData(f);
    var body='Enquiring as: '+(who||'Not stated')+'\nName: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nService: '+d.get('service')+'\n\n'+d.get('msg');
    location.href='mailto:hello@vantapropertygroup.co.uk?subject='+encodeURIComponent('Quote enquiry: '+d.get('service'))+'&body='+encodeURIComponent(body)};
});
document.querySelectorAll('[data-svc]').forEach(function(a){a.addEventListener('click',function(){document.querySelectorAll('select[name=service]').forEach(function(s){s.value=a.dataset.svc})})});
document.querySelectorAll('.ba').forEach(function(el){
  var b=el.dataset.before,a=el.dataset.after;
  if(b){var L=el.querySelector('.before');L.style.backgroundImage='url('+b+')';L.textContent=''}
  if(a){var A=el.querySelector('.after');A.style.backgroundImage='url('+a+')';A.textContent=''}
  el.querySelector('input').addEventListener('input',function(e){el.style.setProperty('--p',e.target.value+'%')});
});
