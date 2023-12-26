import React from "react";

function All() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp"
              classame="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Top Ways to Assess Soft Skills in Full Stack Developers in 2024
              </h5>
              <p className="card-text">
                When you’re hiring a full-stack developer, what are the most
                important things you look for?
                <span className="read-more">
                  <strong>Read more</strong>
                </span>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">23 December 2023</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Top 7 Ways To Use AI in UX Design</h5>
              <p className="card-text">
                Artificial Intelligence (AI) has revolutionized various
                industries, and the field of User Experience (UX) design{" "}
                <span className="read-more">
                  <strong>Read more</strong>
                </span>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">23 December 2023</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="data:image/jpeg;base64,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"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                A Guide to Master UI/UX Design With Online Courses
              </h5>
              <p className="card-text">
                In the evolving world of digitalization, the synthesis of user
                interface and user experience{" "}
                <span className="read-more">
                  <strong>Read more</strong>
                </span>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">23 December 2023</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                9 Best Product-Based Companies for Project Management
              </h5>
              <p className="card-text">
                In today’s tech-driven world, the demand for project managers is
                higher than before. The workload
                <span className="read-more">
                  <strong>Read more</strong>
                </span>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">04 June 2023</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2023/12/how_to_download_an_image_from_figma_.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                How to Download an Image from Figma? A 5-Step Guide to Help You
                Out
              </h5>
              <p className="card-text">
                Whenever you work on creative software that works with media
                elements like images, video, or{" "}
                <span className="read-more">
                  <strong>Read more</strong>
                </span>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">23 December 2023</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Data Science Webinars and Workshops
              </h5>
              <p className="card-text">
                In today’s world, it’s becoming increasingly important to be
                knowledgeable in the field of data
                <span className="read-more">
                  <strong>Read more</strong>
                </span>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">20 October 2023</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
