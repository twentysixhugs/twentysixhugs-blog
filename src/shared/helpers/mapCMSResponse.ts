export const mapCMSResponse = <
  Result extends Array<any>,
  Response extends { data: Array<any> }
>(
  res: Response
): Result => {
  return res.data.map((item) => ({
    ...item.attributes,
    id: item.id,
  })) as Result;
};
