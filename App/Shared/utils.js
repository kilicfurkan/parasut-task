export const checkResponseForError = response => {
  if (response.status !== 200) {
    throw response
  }

  return response
}