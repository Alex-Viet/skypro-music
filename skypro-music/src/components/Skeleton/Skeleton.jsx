import './Skeleton.css';

function Skeleton({ className }) {
  const styles = { background: '#313131' };
  return <div className={className} style={styles} />;
}

export default Skeleton;
