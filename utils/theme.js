export const Light = () => {
  return (
    <style jsx global>{`
      body,
      .navbar {
        background-color: #fff;
        color: #000;
        transition: all 0.2s ease;
      }
      .footer {
        background-color: #efefef;
        color: #4c4c4c;
      }
    `}</style>
  );
};

export const Dark = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #1e1f25;
        color: #fff;
        transition: all 0.3s ease;
      }
      .navbar,
      .footer {
        background-color: #25252d !important;
        color: #fff !important;
      }
      .toggler-btn {
        color: #fff;
      }
      .more a {
        background-color: #1e1f25;
      }
      .card {
        background-color: #272831 !important;
        border: 1px solid transparent !important;
        box-shadow: 3px 4px 6px rgb(158 158 158 / 12%) !important;
      }
      .content h4 {
        color: #fff;
      }
    `}</style>
  );
};
