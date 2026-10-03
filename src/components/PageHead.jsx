export default function PageHead({ title, lead }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
