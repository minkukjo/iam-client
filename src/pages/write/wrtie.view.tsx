import { Button, Col, Form, Input, Row, Select } from 'antd'
import { Controller, useForm } from 'react-hook-form'

const { TextArea } = Input
const { Option } = Select

interface Props {
  onSubmit: (data: any) => void
}

const WritingPageView = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors }
  } = useForm()

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Form.Item
              name="category"
              style={{ fontWeight: 'bold' }}
              labelCol={{ span: 24 }}
              label="게시판 타입"
              rules={[{ required: true, message: '게시판 타입은 필수로 선택해야합니다.' }]}
            >
              <Select
                {...field}
                options={[
                  { value: 'community', label: '커뮤니티' },
                  { value: 'study', label: '스터디 모집' },
                  { value: 'qna', label: 'Q & A' }
                ]}
                style={{ width: 120 }}
              ></Select>
            </Form.Item>
          )}
        ></Controller>
      </div>
      <div style={{ marginTop: 10 }}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="제목"
              labelCol={{ span: 24 }}
              style={{ fontWeight: 'bold' }}
              name="title"
              rules={[
                {
                  required: true,
                  message: '제목은 필수로 입력해야합니다.'
                }
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        ></Controller>
      </div>
      <div style={{ marginTop: 10 }}>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="내용"
              labelCol={{ span: 24 }}
              style={{ fontWeight: 'bold' }}
              name="content"
              rules={[
                {
                  required: true,
                  message: '내용은 필수로 입력해야합니다.'
                }
              ]}
            >
              <TextArea autoSize={{ minRows: 30 }} {...field} />
            </Form.Item>
          )}
        ></Controller>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit">
          제출
        </Button>
      </div>
    </Form>
  )
}
export default WritingPageView
