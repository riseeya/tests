// @ts-check
const { test, expect } = require('@playwright/test');

test("Test Case 1", async ({ request }) => {   
    const response = await request.get("https://api.restful-api.dev/objects/7");
    //console.log(response.status());
    //console.log(await response.json());
    expect(response.status()).toBe(200)

    const responseData = await response.json()

    expect(responseData.id).toBe("7")
    expect(responseData.name).toBe("Apple MacBook Pro 16")
    expect(responseData.data.year).toBe(2019)
    expect(responseData.data["CPU model"]).toBe("Intel Core i9")
    expect(responseData.data["Hard disk size"]).toBe("1 TB")

  });

test("Test Case 2", async ({request}) => {   

  const bodyData = {
    "name": "Apple MacBook Pro 16",
    "data": {
       "year": 2019,
       "price": 1849.99,
       "CPU model": "Intel Core i9",
       "Hard disk size": "1 TB"
    }
 }

  const headerData = {
    Accept: "application/json"
  }

  const response = await request.post("https://api.restful-api.dev/objects",{
    headers : headerData,
    data : bodyData
  })

  //console.log(response.status());
  //console.log(await response.json());
  expect(response.status()).toBe(200)

});

test("Test Case 3", async ({request}) => {
    const responseData = await response.json()
    expect(response.status()).toBe(200)

    const updateData = {
      "year": 2024,
      "price": "1500.000",
    };

    const response = await requestContext.put("https://api.restful-api.dev/objects/7", {
      headers: {
        'Content-Type': 'application/json',
      },
      data: updateData,
    });

    expect(responseData.year).toBe(2024)
    expect(responseData.price).toBe("150.000")
  });