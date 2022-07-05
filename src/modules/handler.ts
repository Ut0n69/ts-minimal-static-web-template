export const handler = () => {
  const button: HTMLElement | null = document.querySelector('button');

  if (button) {
    button.addEventListener('click', () => {
      console.log('hi');
    });
  }
};
