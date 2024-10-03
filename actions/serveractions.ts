"use server";

export async function Create_University(formData: FormData) {
  const university_name = formData.get("university_name");
  const location = formData.get("location");
  console.log(university_name,"",location);
}
