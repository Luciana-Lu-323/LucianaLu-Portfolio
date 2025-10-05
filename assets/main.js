// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Year tabs: show selected year, hide others
const yearBtns = document.querySelectorAll('.year-btn');
const yearSections = document.querySelectorAll('.year-section');

yearBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const y = btn.dataset.year;
    // 按鈕狀態
    yearBtns.forEach(b=>b.classList.toggle('is-active', b===btn));
    // 區塊顯示
    yearSections.forEach(sec=>{
      sec.classList.toggle('is-hidden', sec.dataset.year !== y);
    });
    // 捲到區塊起點
    const target = document.getElementById(`y-${y}`);
    if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Year tabs: show selected year only
const yearBtns = document.querySelectorAll('.year-btn');
const yearSections = document.querySelectorAll('.year-section');

yearBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const y = btn.dataset.year;
    // 切換按鈕狀態
    yearBtns.forEach(b=>b.classList.toggle('is-active', b===btn));
    // 顯示對應年度
    yearSections.forEach(sec=>{
      sec.classList.toggle('is-hidden', sec.dataset.year !== y);
    });
    // 平滑捲動到頂
    const target = document.getElementById(`y-${y}`);
    if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
