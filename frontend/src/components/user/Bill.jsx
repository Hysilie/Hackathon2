/*eslint-disable*/

import React from "react";
import logo from "../../assets/logo.svg";
import { useCurrentUserContext } from "../../contexts/UserContext";

function Bill({
  startDate,
  endDate,
  valuesCar,
  dateConverte,
  dateSoustraction,
}) {
  const { user } = useCurrentUserContext();

  console.log(startDate, endDate);
  return (
    <section className="py-2">
      <div className="max-w-5xl mx-auto bg-white">
        <article className="overflow-hidden">
          <div className="bg-[white] h-[70vh] rounded-b-md">
            <div className="">
              <div className=" flex gap-6 space-y-6 text-slate-700">
                <img className=" h-20 w-20 " src={logo} />

                <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                  Amazon e-Fleet
                </p>
              </div>
            </div>
            <div className="p-9">
              <div className="flex w-full">
                <div className="grid grid-cols-4 gap-12">
                  <div className="text-sm font-light text-slate-500">
                    <p className="text-sm font-normal text-slate-700">
                      Invoice Detail:
                    </p>
                    <p />
                    <p className="w-13 h-14  break-words">
                      M. Mrs. {user.lastname}
                      <br />
                      {user.firstname}
                    </p>
                  </div>
                  <div className="text-sm font-light text-slate-500">
                    <p className="text-sm font-normal text-slate-700">
                      Billed To
                    </p>
                    <p>Amazon e-Fleet Company</p>
                    <p>Tesla Street 007</p>
                    <p>Frisco</p>
                    <p>CA 0000</p>
                  </div>
                  <div className="text-sm font-light text-slate-500">
                    <p className="text-sm font-normal text-slate-700">
                      Invoice Number
                    </p>
                    <p>0028326</p>

                    <p className="mt-2 text-sm font-normal text-slate-700">
                      Date of Issue
                    </p>
                    <p> {dateConverte(startDate)}</p>
                  </div>
                  <div className="text-sm font-light text-slate-500">
                    <p className="text-sm font-normal text-slate-700">Terms</p>
                    <p>min. 7 Days</p>

                    <p className="mt-2 text-sm font-normal text-slate-700">
                      Due
                    </p>
                    <p>{dateConverte(endDate)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col mx-0 ">
                <table className="min-w-full divide-y divide-slate-500">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-1 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="hidden py-1 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="hidden py-1 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className=" pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                        <div className="font-medium text-slate-700">
                          {valuesCar.brand} {valuesCar.model}
                        </div>
                        <div className="mt-0.5 text-slate-500 sm:hidden">
                          1 unit at 0.00€
                        </div>
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                        1
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                        20%
                      </td>
                      <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                        {dateSoustraction(startDate, endDate) *
                          valuesCar.pricePerDay}
                        €
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                      >
                        Subtotal
                      </th>
                      <th
                        scope="row"
                        className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                      >
                        Subtotal
                      </th>
                      <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                        {dateSoustraction(startDate, endDate) *
                          valuesCar.pricePerDay}
                        €
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                      >
                        Discount
                      </th>
                      <th
                        scope="row"
                        className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                      >
                        Discount
                      </th>
                      <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                        0.00€
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                      >
                        Tax
                      </th>
                      <th
                        scope="row"
                        className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                      >
                        Tax
                      </th>
                      <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                        30.00€
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                      >
                        Total
                      </th>
                      <th
                        scope="row"
                        className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                      >
                        Total
                      </th>
                      <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                        {dateSoustraction(startDate, endDate) *
                          valuesCar.pricePerDay +
                          30}
                        €
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="mt-8 p-9">
              <div className="border-t pt-9 border-slate-200">
                <div className="text-sm font-light text-slate-700">
                  <p>
                    Payment terms are 7 days. Please be aware that according to
                    the Late Payment of Unwrapped Debts Act 0000, freelancers
                    are entitled to claim a 00.00 late fee upon non-payment of
                    debts after this time, at which point a new invoice will be
                    submitted with the addition of this fee. If payment of the
                    revised invoice is not received within a further 14 days,
                    additional interest will be charged to the overdue account
                    and a statutory rate of 8% plus Bank of England base of
                    0.5%, totalling 8.5%. Parties cannot contract out of the
                    Act’s provisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Bill;
