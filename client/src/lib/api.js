const API_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmUzNmVlNDgyNzQxYmYwYzc1MDE3ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzE5NjA0OSwiZXhwIjoxNjQ3NDU1MjQ5fQ.ak4Mpy-J3LK9SPyLEWMxZIrCHiwq7Ouaw8tHf62hK-Q";

export async function getProducts(category) {
  const subAPIURL = "product";

  console.log(category);
  const response = await fetch(
    category ? API_URL + subAPIURL + "?category=Coat" : API_URL + subAPIURL
  );
  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function getProductDetail(id) {
  const subAPIURL = "product/find/";

  const response = await fetch(API_URL + subAPIURL + id);
  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function payment(paymentInfo) {
  const subAPIURL = "checkout/payment";

  const response = await fetch(API_URL + subAPIURL, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmUzNmVlNDgyNzQxYmYwYzc1MDE3ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzQ4MTMxNiwiZXhwIjoxNjQ3NzQwNTE2fQ.rJDD0W7AALWS0CMqyI92o7ywbKtjwmwY7ijQcqJ1hLE",
      body: JSON.stringify(paymentInfo),
    },
  });
  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Payment unsucessful, please try again.");
  }

  return data;
}
