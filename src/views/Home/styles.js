import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #8c05bd;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;
export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 380px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  color: #999;
`;
export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;
export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;
export const Annotation = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const PositionTabs = styled.View`
  margin-bottom: 20px;
`;
