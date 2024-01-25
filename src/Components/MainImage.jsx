import '../Styling/MainImage.css'

export default function MainImage() {
    const handleLinkClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
          const offset = 150; 
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
              top: elementPosition,
              behavior: 'smooth',
          });
      }
  };

    return (
        <>
        <h1 className='main-image-title'>COOPERT</h1>
      </>
    )
}