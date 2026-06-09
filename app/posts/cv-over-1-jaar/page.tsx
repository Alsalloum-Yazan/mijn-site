import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="cv-over-1-jaar" title="CV over 1 jaar" date="24 sep 2024" readTime="1 minuten" img="/posten/CV over 1 jaar.webp" likes={0} comments={0}>
      <div className="reveal glow-card glow-card-p36">
        <p className="post-p-mb20">Hieronder is mijn CV over 1 jaar terug te zien. Naar verwachting ben ik dan een schooljaar verder en heb ik een 5e stage afgerond.</p>
        <p className="post-p-mb20">Ik wil hiervoor op tijd op zoek gaan naar een passende stage naar mijn interesse, omdat ik dit vorig jaar tot mijn spijt niet had.</p>
        <p>Graag pas ik mijn spontaniteit toe en creëer ik hiermee de mogelijkheden om nieuwe mensen te leren kennen en nog meer over het marketingveld te weten.</p>
      </div>
    </PostLayout>
  );
}
