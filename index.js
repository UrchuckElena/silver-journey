// const dragField = document.querySelector('.drag-field');
// const dragItem = document.querySelector('.drag-field__item');

// dragItem.addEventListener('mousedown', function (event) {
//   let coordsItemX = event.clientX - dragItem.getBoundingClientRect().left;
//   let coordsItemY = event.clientY - dragItem.getBoundingClientRect().top;

//   let dragItemSizes = {
//     width: dragItem.offsetWidth,
//     height: dragItem.offsetHeight,
//   };

//   let dragFieldSizes = {
//     left: dragField.getBoundingClientRect().left + scrollX,
//     top: dragField.getBoundingClientRect().top + scrollY,
//     right:
//       dragField.getBoundingClientRect().left + scrollX + dragField.offsetWidth,
//     bottom:
//       dragField.getBoundingClientRect().top + scrollY + dragField.offsetHeight,
//   };

//   dragItem.style.position = 'absolute';
//   dragItem.style.zIndex = 1000;
//   document.body.append(dragItem);

//   moveItem(event.pageX, event.pageY);

//   function moveItem(pageX, pageY) {
//     let currentX = pageX - coordsItemX;
//     let currentY = pageY - coordsItemY;

//     if (
//       currentX + dragItemSizes.width <= dragFieldSizes.right &&
//       currentX >= dragFieldSizes.left
//     ) {
//       dragItem.style.left = `${currentX}px`;
//     } else {
//       if (currentX + dragItemSizes.width > dragFieldSizes.right) {
//         dragItem.style.left = `${dragFieldSizes.right - dragFieldSizes.width}`;
//       }
//       if (currentX < dragFieldSizes.left) {
//         dragItem.style.left = `${dragFieldSizes.left}px`;
//       }
//     }
//     if (
//       currentY + dragItemSizes.height <= dragFieldSizes.bottom &&
//       currentY >= dragFieldSizes.top
//     ) {
//       dragItem.style.top = `${currentY}px`;
//     } else {
//       if (currentY + dragItemSizes.height > dragFieldSizes.bottom) {
//         dragItem.style.top = `${dragFieldSizes.bottom - dragFieldSizes.height}`;
//       }
//       if (currentY < dragFieldSizes.top) {
//         dragItem.style.top = `${dragFieldSizes.top}px`;
//       }
//     }
//   }
//   let currentDroppable = null;

//   function onDragItem(event) {
//     moveItem(event.pageX, event.pageY);

//     dragItem.hiden = true;

//     let elemBelow = document.elementsFromPoint(event.clientX, event.clientY);
//     dragItem.hiden = false;

//     if (!elemBelow) return;

//     let droppableBelow = elementBelow.closest('.drag-field__point');

//     if (currentDroppable !== droppable) {
//       if (currentDroppable) {
//         currentDroppable.classList.remove('_active');
//         dragItem.classList.remove('_active');
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) {
//         currentDroppable.classList.add('_active');
//         dragItem.classList.add('_active');
//       }
//     }
//   }
//   document.addEventListener('mousemove', onDragItem);

//   document.addEventListener(
//     'mouseup',
//     function (event) {
//       document.removeEventListener('mousemove', onDragItem);
//     },
//     { once: true }
//   );
// });

// dragItem.addEventListener('dragstart', function (event) {
//   event.preventDefault();
// });

const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

	let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
	let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

	let gragItemSizes = {
		width: gragItem.offsetWidth,
		height: gragItem.offsetHeight
	}
	let gragFieldSizes = {
		left: gragField.getBoundingClientRect().left + scrollX,
		top: gragField.getBoundingClientRect().top + scrollY,
		right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
		bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
	}

	gragItem.style.position = 'absolute';
	gragItem.style.zIndex = 1000;
	document.body.append(gragItem);

	moveItem(event.pageX, event.pageY);

	function moveItem(pageX, pageY) {
		let currentX = pageX - coordsItemX;
		let currentY = pageY - coordsItemY;

		if (
			currentX + gragItemSizes.width <= gragFieldSizes.right &&
			currentX >= gragFieldSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > gragFieldSizes.right) {
				gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
			}
			if (currentX < gragFieldSizes.left) {
				gragItem.style.left = `${gragFieldSizes.left}px`;
			}
		}
		if (
			currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
			currentY >= gragFieldSizes.top
		) {
			gragItem.style.top = `${currentY}px`;
		} else {
			if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
				gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
			}
			if (currentY < gragFieldSizes.top) {
				gragItem.style.top = `${gragFieldSizes.top}px`;
			}
		}
	}

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.drag-field__point');

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
			}
		}
	}
	document.addEventListener('mousemove', onDragItem);

	document.addEventListener("mouseup", function (event) {
		document.removeEventListener('mousemove', onDragItem);
	}, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();
});