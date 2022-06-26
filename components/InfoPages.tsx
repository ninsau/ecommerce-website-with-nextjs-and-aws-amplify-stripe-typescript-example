import { truncate } from "lodash";
import { useData } from "../lib/hooks";
import { InfoPages } from "../src/models";
import { Formik, Field, Form } from "formik";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { DataStore } from "aws-amplify";
import { CheckCircleIcon, XIcon } from "@heroicons/react/outline";

const InfoPagesComponent = () => {
  const pages = useData(InfoPages);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<any>();
  const [show, setShow] = React.useState(false);

  const toggleModal = (page: any) => {
    setSelected(page);
    setOpen(!open);
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <p className="mt-2 text-sm text-gray-700">
              A list of all the static pages on the site.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Content
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Page
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Header
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {pages.map((page) => (
                      <tr key={page.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {truncate(page.title)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {truncate(page.content)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {truncate(page.page)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {truncate(page.header)}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <span
                            onClick={() => toggleModal(page)}
                            className="text-green-600 cursor hover:text-green-900"
                          >
                            Edit<span className="sr-only"> {page.title}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <Formik
                      initialValues={selected}
                      onSubmit={async (values) => {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 500)
                        );
                        const original = await DataStore.query(
                          InfoPages,
                          values.id
                        );

                        try {
                          await DataStore.save(
                            InfoPages.copyOf(original!, (updated) => {
                              updated.title = values.title;
                              updated.content = values.content;
                              updated.page = values.page;
                              updated.header = values.header;
                            })
                          );
                        } catch (error) {
                          console.log(error);
                        } finally {
                          setOpen(false);
                          setShow(true);
                        }
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <label
                              htmlFor="title"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Title
                            </label>
                            <div className="mt-1">
                              <Field
                                type="text"
                                name="title"
                                id="title"
                                className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="content"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Content
                            </label>
                            <div className="mt-1">
                              <Field
                                type="text"
                                name="content"
                                id="content"
                                className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="page"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Page
                            </label>
                            <div className="mt-1">
                              <Field
                                type="text"
                                name="page"
                                id="page"
                                className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="header"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Header
                            </label>
                            <div className="mt-1">
                              <Field
                                type="text"
                                name="header"
                                id="header"
                                className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>

                          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                            <button
                              type="submit"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* notification */}

      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Successfully saved!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Your changes have been added.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default InfoPagesComponent;
