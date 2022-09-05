import React from 'react'

function PageLayoutTable() {
    return (
        <>
            <div className=''>
                <div class="flex flex-col justify-center h-full">

                    <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <div class="font-semibold text-gray-800 text-left">Page Layout Record</div>
                        </header>

                        <div class="overflow-x-auto p-3">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th></th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Field Type</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Caption</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Field Name</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-center"></div>
                                        </th>
                                        
                                    </tr>
                                </thead>

                                <tbody class="text-sm divide-y divide-gray-100">

                                    <tr>
                                        <td class="p-2">
                                            <input class="w-5 h-5" value="id-1"
                                            />
                                        </td>
                                        <td class="p-2">
                                            <div class="font-medium text-gray-800 text-left">
                                               
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left"></div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left font-medium text-green-500">
                                              
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="flex justify-center">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td class="p-2">
                                            <input class="w-5 h-5" value="id-2"
                                            />
                                        </td>
                                        <td class="p-2">
                                            <div>
                                                <div class="font-medium text-gray-800 text-left"></div>
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left"></div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left font-medium text-green-500">
                                               
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="flex justify-center">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td class="p-2">
                                            <input class="w-5 h-5" value="id-3"
                                            />
                                        </td>
                                        <td class="p-2">
                                            <div>
                                                <div class="font-medium text-left text-gray-800"></div>
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left"></div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left font-medium text-green-500"></div>
                                        </td>
                                        <td class="p-2">
                                            <div class="flex justify-center">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
                {/* </section> */}


            </div>
        </>
    )
}

export default PageLayoutTable