const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="border border-t-2 p-4 text-center">
      Created By &nbsp;
      <i className="fa fa-copyright"></i>
      <a
        href="https://www.linkedin.com/in/aditi-umesh-28b8a616a/"
        target="_blank"
        title="Aditi Umesh's Linkedin Profile"
      >
        Aditi Umesh &nbsp;
      </a>
      {year} &nbsp;
      <i className="fa fa-heart text-red-600"></i> &nbsp;
      <strong>
        Dining <span> Heaven</span>
      </strong>
    </div>
  );
};

export default Footer;
