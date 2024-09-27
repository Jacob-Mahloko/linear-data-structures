import React from 'react';


const GenericTheorySection = ({ title, introduction, characteristics, types, operations, advantages, disadvantages, applications, conclusion }) => {
  return (
    <div className="theory-container">
      <h1>{title}</h1>

      <section>
        <h2>Introduction</h2>
        <p>{introduction}</p>
      </section>

      <section>
        <h2>Characteristics</h2>
        <ul>
          {characteristics.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Types</h2>
        <ul>
          {types.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Operations</h2>
        <ul>
          {operations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Advantages</h2>
        <ul>
          {advantages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Disadvantages</h2>
        <ul>
          {disadvantages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Applications</h2>
        <ul>
          {applications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>{conclusion}</p>
      </section>
    </div>
  );
};

export default GenericTheorySection;
