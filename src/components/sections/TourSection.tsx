import React from 'react'

const TourSection = () => {
  return (
    <div className="hero min-h-screen bg-indigo-100">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className={'max-w-xl'}>
          <div className={'grid grid-cols-3 gap-2'}>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <div className="card shadow-xl image-full">
                  <figure>
                    <img src="https://picsum.photos/id/1005/400/250" />
                  </figure>
                  <div className="justify-end card-body">
                    <h2 className="card-title">Malang</h2>
                    {/* <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> */}
                  </div>
                </div>

                // <div className="card bg-white">
                //   <figure>
                //     <img src="https://picsum.photos/id/1005/400/250" />
                //   </figure>
                //   <div className="card-body">
                //     <h2 className="card-title">
                //       Malang
                //     </h2>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Our Tour
          </h1>
          <p className="mb-5">
            Di seluruh nusantara terdapat puluhan ribu lokasi habitat burung-burung yang tersebar. Ingin melihat dan merasakan bagaimana habitat burung favorit kalian? kami menawarkan tour di seluruh wilayah Indonesia!
          </p>
          <button className="btn btn-primary">Lihat Tour Kami</button>
        </div>
      </div>
    </div>
  )
}

export default TourSection
