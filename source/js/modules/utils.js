const body = document.querySelector(`body`);

const getScrollbarWidth = () => {
  const outer = document.createElement(`div`);
  outer.style.visibility = `hidden`;
  outer.style.overflow = `scroll`;
  outer.style.msOverflowStyle = `scrollbar`;
  body.appendChild(outer);
  const inner = document.createElement(`div`);
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

const getBodyScrollTop = () => {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.ScrollTop) ||
    (document.body && document.body.scrollTop)
  );
};

const disableScrolling = () => {
  const scrollWidth = getScrollbarWidth();
  body.setAttribute(`style`, `padding-right: ` + scrollWidth + `px;`);
  body.dataset.scrollY = `${getBodyScrollTop()}`;
  body.style.top = `-${document.body.dataset.scrollY}px`;
  body.classList.add(`scroll-lock`);
};

const enableScrolling = () =>{
  body.removeAttribute(`style`);
  body.classList.remove(`scroll-lock`);
  window.scrollTo(0, +document.body.dataset.scrollY);
};

const getParent = (el, cssClass) => {
  let flag = false;
  let element = el;
  const cls = cssClass;
  while (!element.classList.contains(cls)) {
    element = element.parentElement;

    if (!element) {
      flag = true;
      break;
    }
  }
  return flag;
};

const returnParent = (el, cssClass) => {
  let element = el;
  const cls = cssClass;
  while (!element.classList.contains(cls) && !element.matches(cls)) {
    element = element.parentElement;

    if (!element) {
      break;
    }
  }
  return element;
};

const onWindowScrollAnimation = (block, height, fn, fn2) => {
  window.addEventListener(`scroll`, () => {
    if (block) {
      const offset = window.pageYOffset;
      const topSkillsContainer = block.getBoundingClientRect().top + offset - height;
      if (offset >= topSkillsContainer) {
        fn();
      } else if (fn2) {
        fn2();
      }
    }
  });
};

const RenderPosition = {
  AFTERBEGIN: `prepend`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const renderElement = (container, component, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component);
      break;
    case RenderPosition.AFTEREND:
      container.after(component);
      break;
    case RenderPosition.BEFOREEND:
      container.append(component);
      break;
  }
};

export {disableScrolling, enableScrolling, getParent, returnParent, onWindowScrollAnimation, createElement, renderElement, RenderPosition};
