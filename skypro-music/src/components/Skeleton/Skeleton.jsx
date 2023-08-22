import './Skeleton.css';

function Skeleton({ className }) {
  const classes = `${className} sceleton`;

  return <div className={classes} />;
}

export default Skeleton;
