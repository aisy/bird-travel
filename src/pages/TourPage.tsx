import DefaultLayout from "../layout/DefaultLayout";

import { getListTour } from '../services/servicesTour';

const TourPage = () => {
  const listTour = getListTour();

  return (
    <DefaultLayout>
      <div className={"px-32 my-28"}>
        <div className={"grid grid-cols-3 gap-4"}>
          <div className={"menu p-2 shadow-lg bg-base-100 text-base-content text-opacity-40 rounded-box"}>
            <div className={"card-body"}>
              asdasdasd
            </div>
          </div>
          <div className={"card col-span-2"}>
            <div className={"grid grid-cols-3 gap-2"}>
              {
                listTour.map(items => {
                  return (
                    <div className="card shadow-md">
                      <figure><img src="https://picsum.photos/id/1005/400/250" /></figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          Top image
                          <div className="badge mx-2 badge-secondary">NEW</div>
                        </h2>
                        <p>
                          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.
                        </p>
                        <div className="justify-end card-actions">
                          <button className="btn btn-secondary">
                            More info
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout >
  );
}

export default TourPage;