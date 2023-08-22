import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-[#1f2937]">Profile</h1>
      <div className="mt-8 flex flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl text-[#4338ca] font-medium">Profile</h2>

          <table className="mt-[1.313rem]">
            <tr className="text-left leading-8">
              <td className="font-semibold text-black pr-5">Doğum Tarihi</td>
              <td>22.09.1989</td>
            </tr>
            <tr className="text-left leading-8">
              <td className="font-semibold text-black pr-5">İkamet Şehri</td>
              <td>İstanbul</td>
            </tr>
            <tr className="text-left leading-8">
              <td className="font-semibold text-black pr-5">Eğitim Durumu</td>
              <td>İstanbul Aydın Ünv. Bilgisayar Müh. (İng.)</td>
            </tr>
            <tr className="text-left leading-8">
              <td className="font-semibold text-black pr-5">
                Tercih Ettiği Rol
              </td>
              <td>Frontend, UI</td>
            </tr>
          </table>
        </div>
        <div>
          <h2 className="text-3xl text-[#4338ca] font-medium">About Me</h2>
          <div className="max-w-[560px]">
            <p className="mt-[1.313rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.{" "}
            </p>
            <br />
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
      <hr className="my-8 mx-0 border-t border-[#bab2e7]" />
    </div>
  );
};

export default Profile;
