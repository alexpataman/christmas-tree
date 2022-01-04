import html2canvas from 'html2canvas';

export const getScreenshot = async (
  el: React.MutableRefObject<HTMLElement | null>,
  width: number,
  height: number
) => {
  const canvasOptions = {
    backgroundColor: null,
    logging: false,
  };

  if (!el.current) {
    return;
  }

  return html2canvas(el.current, canvasOptions).then(function (canvas) {
    let extra_canvas = document.createElement('canvas');
    extra_canvas.width = width;
    extra_canvas.height = height;
    var ctx = extra_canvas.getContext('2d');
    ctx!.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      extra_canvas.width,
      extra_canvas.height
    );
    return extra_canvas.toDataURL();
  });
};
